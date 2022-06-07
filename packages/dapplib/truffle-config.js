require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom problem brown turtle chaos rare remember slow guess castle off snake'; 
let testAccounts = [
"0x8422b81ae19ec7adae931926f641b9efd4836c8c125f39e44b57fd44bbc07fcb",
"0xccb7d8ce5e84440c43948b134986b347d7f1b221123b31a67bfcc60ba90d096a",
"0xd541d855b92a09ca5539e6ea1c1d5a1579d41e7b6f5f7ac694760bd790c08c55",
"0x8748d368a3192ee62d3dfd066397e1ae20b3f71dfbc42644fe2f091c817461d1",
"0xd4fa0223427fc4bdd547d3a8cbe10c2b8028d88c4f91acc4916fa5a93eb64814",
"0xd5a957d9c943319192c748f4068eb95b0cd6b79809dd44c355a45904406f858d",
"0xb3b9720dc4557bd64c08df6fc52a257bb536ee8620abda50430317321e403fce",
"0x9e8ea7114626b89589e115edfef3a317d5599ca3c66a7148cd620fb4d6aa6c1a",
"0x0382c92d3ca89fc32d722c1e4efdfe987461d6a8d221397b2aa0e51b78158d79",
"0xaf60a4250bdc1fd10add74d8b518045a044a3b681321ac38cf8ca2db1aa0be3c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

