require("@nomicfoundation/hardhat-toolbox");

const infuraId = "cbc805d0b98445f689621e33aa60220f"

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    // mumbai: {
    //   // Infura
    //   url: `https://polygon-mumbai.infura.io/v3/${infuraId}`,
    //   // url: "https://rpc-mumbai.matic.today",
    //   accounts: [process.env.privateKey]
    // },
    // matic: {
    //   // Infura
    //   url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
    //   accounts: [process.env.privateKey]
    // }
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
};
