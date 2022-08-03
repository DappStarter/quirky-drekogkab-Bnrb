require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'imitate prize frame street name rate sister pulp hunt deputy success series'; 
let testAccounts = [
"0xf950be917c98fda05b403ee41e17dcac2ffe5bd48434f80238fdf1cd1439f2f9",
"0xc57f8e6c1dce7c85f03853c8d5607aa16e16d79da3ad75478d8514f883e6210e",
"0x955216a78ecc10913bf4bfaf69ef15e7a2447e4dc2a725f5781a0ce3b3669fc5",
"0xc7fe95e19d8451e59bb7c6b26fe18845458136c6fe0fdeaf54ae3cdd1918e647",
"0x043f5f6c5e53ea0f04dea254472933192d692564a6f3d86974a529e9115c2cd1",
"0x5cebea68bda629c8ced5a5631f9c70d6844219e4059f02deaa65b9a57d31b4d0",
"0xd01bba306c0237146a958d714c93d647e92c8de1bc7707aa4ce75e6a0d0e968c",
"0x2bc9092c2b219a3ef06f0bb364859be12d30324d48dac1a2f3e6ff5b536070e5",
"0x8f593acf8a1e6628949de6bbff7d00fd77d7a0e51aa8fe92efebe87ecdd35ca1",
"0x84b53bd651e09d8b330afdc086ef946927f66dbb13254a6fa8a7c9952406ec6e"
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

