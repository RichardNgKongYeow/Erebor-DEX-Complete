require('babel-register');
require('babel-polyfill');

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: "*" // Match any network id
    },
  },
  contracts_directory: './frontend/src/contracts/',
  contracts_build_directory: './frontend/src/abis/',
  compilers: {
    solc: {
      version: "0.5.0",    // Fetch exact version from solc-bin (default: truffle's version)
      optimizer: {
        enabled: true,
        runs: 200
      },
     //evmVersion:"petersburg"
    }
  }
}
