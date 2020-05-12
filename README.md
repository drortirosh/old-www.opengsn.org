# Gas Station Network Site

The official front end for the [Gas Station Network](https://opengsn.org/).  The staging site is [here](https://gsn-staging.netlify.com).

## GSN Test Environment

The Gas Station Network is currently deployed to Rinkeby.  The addresses are:

| Role | Address | Description |
| ---- | ------- | ----------- |
| RelayHub | [0xd216153c06e857cd7f72665e0af1d7d82172f494](https://gsn-staging.netlify.com/relay-hubs/0x4FC8ac0210527bCA8c5C66a595Da78B428862276) | Main RelayHub contract |
| SampleRecipient | [0x9C7bd19648BF9538eE9986b0E2BF18daaA80601c](https://gsn-staging.netlify.com/recipients/0x9C7bd19648BF9538eE9986b0E2BF18daaA80601c) | Example contract that handles meta tx |
| Relay | [0xeE90C66Ed6Aaafbf2DBcd34c84c395905B5C8f20](https://gsn-staging.netlify.com/relay-hubs/0x4FC8ac0210527bCA8c5C66a595Da78B428862276/relay?relayUrl=https://rinkeby-01.gsn.openzeppelin.org) | Relay deployed to https://rinkeby-01.gsn.openzeppelin.org |

# Local Setup

The GSN site can be run locally using just a few commands:

```
# install dependencies
yarn
```

```
# Setup environment variables.  See the file for more info.
cp .envrc.example .envrc
# allow environment variables
direnv allow
```

```
# Start up the local server
yarn dev
```

Now navigate to [localhost:3000](http://localhost:3000) in your browser.  You'll be able to build against test nets such as Rinkeby.

For full control over the smart contracts you'll want to setup the Gas Station Network locally.

## Gas Station Network Local Test Environment

Setup a local clone of the [GSN repo](https://github.com/opengsn/gsn).  

Once the dependencies are set up you can run:

```
./restart-relay.sh
```

This will start up a local ganache, deploy the contracts, create a sample recipient, and create a relay.  You may need to run this command a couple of times; it was a little flakey at the time of this writing.

To mint Ether to yourself on the ganache instance, use the command:

```
./scripts/ganache-fund.js 10 0x1234...
```

Replace `0x1234...` with your address.

In your browser simply use the network `Localhost 8545`.  You may need to reset the account.

You'll find GSN1 has cleverly deployed consistent addresses on all networks.

| Role | Address | Description |
| ---- | ------- | ----------- |
| RelayHub | [0xCfEB869F69431e42cdB54A4F4f105C19C080A601](http://localhost:3000/relay-hubs/0xCfEB869F69431e42cdB54A4F4f105C19C080A601) | Main RelayHub contract |
| SampleRecipient | [0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B](http://localhost:3000/recipients/0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B) | Example contract that handles meta tx |
| Relay | [0xeE90C66Ed6Aaafbf2DBcd34c84c395905B5C8f20](http://localhost:3000/relay-hubs/0xCfEB869F69431e42cdB54A4F4f105C19C080A601/relay?relayAddress=0xeE90C66Ed6Aaafbf2DBcd34c84c395905B5C8f20) | Relay deployed to http://localhost:8090 |

# Production Deployment

The app can currently be deployed to Netlify.  Url re-write rules are required so that static pages can serve dynamic urls.  The url re-write configuration lives in `netlify.toml`.

To build the production version of the site run:

```
$ yarn dist
```

# Configuring the built-in RelayHub addresses

The directory `networks` contains a configuration file for each network the contracts are deployed to.  Network files are named according to the network id: contracts for mainnet live in `networks/1.json`, contracts for rinkeby live in `networks/4.json` etc.

Network files are JSON formatted and the expected structure is an array of objects.  For example:

```
[
  {
    "contractName": "RelayHub",
    "address": "0x4FC8ac0210527bCA8c5C66a595Da78B428862276"
  }
]
```

You can add and edit the network config files to add new RelayHubs.  Only one RelayHub per network is supported by the application.

##### Made with :heart: by [Delta Camp](https://delta.camp)
