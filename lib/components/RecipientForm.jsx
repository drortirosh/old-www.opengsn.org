import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { graphql, withApollo, Query } from 'react-apollo'
import { ConnectWallet } from 'lib/components/ConnectWallet'
import { react } from 'dapp-core'
import { ethers } from 'ethers'

import { recipientQuery } from '../queries/recipientQuery'
import { relayHubQuery } from '../queries/relayHubQuery'
import { withSendTransaction } from './hoc/withSendTransaction'
import { withEthereumPermissionQuery } from './hoc/withEthereumPermissionQuery';
import { relayHubTargetSubscription } from '../subscriptions/relayHubTargetSubscription'

export const RecipientForm = react.withTransactionEe(withApollo(withSendTransaction(
  withEthereumPermissionQuery(
  graphql(recipientQuery, {
    name: 'recipientQuery',
    options: (props) => {
      return {
        variables: {
          address: props.recipientAddress
        }
      }
    }
  })
(class _RecipientForm extends PureComponent {
  static propTypes = {
    recipientAddress: PropTypes.string.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      depositAmount: ''
    }
  }

  componentDidMount () {
    this.startSubscription()
  }

  componentDidUpdate () {
    this.startSubscription()
  }

  startSubscription() {
    if (this.subscription) { return }
    if (this.relayHubAddress()) {
      this.subscription = this.props.client.subscribe({
        query: relayHubTargetSubscription,
        variables: {
          relayHubAddress: this.relayHubAddress(),
          targetAddress: this.props.recipientAddress
        }
      }).subscribe(() => {
        this.props.recipientQuery.refetch()
      })
    }
  }

  componentWillUnmount () {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }

  handleSubmitDeposit = (e) => {
    e.preventDefault()
    this.props.sendTransaction({
      variables: {
        contractAddress: this.relayHubAddress(),
        contractName: 'RelayHub',
        method: 'depositFor',
        args: [this.props.recipientAddress],
        value: ethers.utils.parseEther(this.state.depositAmount).toString()
      }
    }).then(({ data }) => {
      this.props.ee(data.sendTransaction.id)
        .on('error', function () {
          console.log('There was an error', arguments)
        })
        .on('receipt', () => {
          console.log('accepted!')
          this.setState({
            depositAmount: ''
          })
        })
    })
  }

  relayHubAddress = () => {
    if (this.props.recipientQuery.RelayRecipient) {
      return this.props.recipientQuery.RelayRecipient.relayHubAddress
    }
  }

  render () {
    const { recipientQuery, ethereumPermissionQuery } = this.props
    const { RelayRecipient, error, loading } = recipientQuery
    const { ethereumPermission } = ethereumPermissionQuery

    let connect
    if (!ethereumPermission) {
      connect = <div>
        <ConnectWallet />
      </div>
    }

    if (error) {
      console.error(error)
      return 'This address is not a valid recipient'
    } else if (loading) {
      return '...'
    } else {
      const { balance, relayHubAddress } = RelayRecipient || {}
      return <>
        <p>
          Recipient balance is {balance ? ethers.utils.formatEther(balance) : '?'}
        </p>
        <p>
          Relay Hub is {relayHubAddress || '?'}
        </p>

        {connect}

        <Query query={relayHubQuery} variables={{relayHubAddress}}>
          {({data, loading, error}) => {
            if (loading) {
              return <></>
            } else if (error) {
              console.error(error)
              return <></>
            } else {
              const { maximumDeposit } = data.RelayHub
              return (
                <form onSubmit={this.handleSubmitDeposit}>
                  <input disabled={!ethereumPermission} type='number' min='0' max={ethers.utils.formatEther(maximumDeposit)} value={this.state.depositAmount} onChange={(e) => this.setState({depositAmount: e.target.value})} />
                  <input disabled={!ethereumPermission} type='submit' value='Deposit' />
                </form>
              )
            }
          }}
        </Query>
      </>
    }
  }
})))))