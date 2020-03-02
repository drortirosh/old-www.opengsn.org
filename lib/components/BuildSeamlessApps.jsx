import React from 'react'

import { Card } from 'lib/components/Card'

import PortisLogo from 'assets/images/portis-logo.svg'
import OpenZeppelinLogo from 'assets/images/open-zeppelin-logo.svg'

export const BuildSeamlessApps = function() {
  return (
    <div
      className='pt-20 pb-2 sm:pb-20 bg-gray-100'
    >
      <div className='container'>
        <div className='lg:w-9/12 mx-auto text-center mb-8'>
          <h2 className='font-silkaSemiBold text-2xl md:text-3xl pb-6 lg:pb-0'>
            Build a seamless application with GSN
          </h2>

          <p className='text-sm md:text-base'>
            Use the following SDKs to easily integrate your application with the Gas Station Network. Although you can do it by yourself, the following partners give you plug-play solutions to solve your onboarding needs.
          </p>
        </div>

        <div className='flex flex-wrap lg:-mx-32 lg-margin-override'>
          <div className='flex max-w-auto lg-card-width-and-padding-override mt-6 mb-6 order-2 sm:px-6 lg:my-20 lg:order-2 lg:max-w-sm'>
            <Card
              img={<img src={OpenZeppelinLogo} />}
              text={<p className="text-sm">
                      <b>OpenZeppelin</b> is a professional platform to develop blockchain based applications. <br/><br />
                      <b>OpenZeppelin SDK</b> makes smart contract development easy. Save hours of development time by compiling, upgrading, deploying, and interacting with smart contracts with our CLI. <br/><br/>
                    </p>
                    }
              url='https://docs.openzeppelin.com/openzeppelin/'
            />
          </div>

          <div className='flex max-w-auto lg-card-width-and-padding-override mt-6 mb-6 order-3 sm:px-6 lg:my-20 lg:order-1 lg:max-w-sm'>
            <Card
              img={<img src={PortisLogo} />}
              text={<p className="text-sm">With the Portis SDK, DApps get a standard web3 provider, and thanks to E2E encryption, their users get a non-custodial wallet and can sign transactions. all using their existing browser, with a familiar email and password login flow - no installation required!</p>}
              url='https://docs.portis.io/#/gas-relay'
            />
          </div>

        </div>
      </div>
    </div>
  )
}
