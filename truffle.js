var HDWalletProvider = require("truffle-hdwallet-provider");
var MNEMONIC = "spirit supply whale amount human item harsh scare congress discover talent hamster";
var ENDPOINT = "https://rinkeby.infura.io/v3/76bdc9becf064588a948f783339a50e3"

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    // Rinkeby contract deployment
    rinkeby: {
      provider: () => new HDWalletProvider(MNEMONIC, ENDPOINT),
        network_id: 4       // rinkeby's id
    }
  }        
};
