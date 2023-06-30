require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
const { NUXT_PUBLIC_INFURA_KEY, MNEMONIC } = process.env;
const infuraNetwork = 'wss://sepolia.infura.io/ws/v3/'+NUXT_PUBLIC_INFURA_KEY
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
    sepolia: {
      provider: () => new HDWalletProvider(MNEMONIC, infuraNetwork),
      network_id: 11155111,
      gas: 5500000,
    },
  },
  compilers: {
    solc: {
      version: "^0.8.0",
    },
  },
};