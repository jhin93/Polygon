require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString()

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${process.env.MUMBAI_projectId}`,
      accounts: [privateKey]
    },
    mainnet: {
      url: `https://polygon-mumbai.infura.io/v3/${process.env.MAINNET_projectId}`,
      accounts: [privateKey]
    }
  },
  solidity: "0.8.9",
};
