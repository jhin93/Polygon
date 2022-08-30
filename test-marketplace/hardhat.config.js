/* hardhat.config.js */
require("@nomiclabs/hardhat-waffle")

const privateKey = "9dcd9c815b3dd8e5fcc10f3f6249ba8f73ffaed6a747c226f1d5df5e25b7c524"

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    // hardhat: {
    //   chainId: 1337
    // },
    //  unused configuration commented out for now
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [privateKey]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}