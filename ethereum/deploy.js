const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const mnemonic = 'side boil never cargo purchase rubber phrase evolve logic winner roast east';
const testnetUrl = 'https://rinkeby.infura.io/v3/d16dbf564850445589f7c759fa74079c';

const provider = new HDWalletProvider(
    mnemonic,
    testnetUrl
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('attempting to deploy',accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({data: compiledFactory.bytecode})
        .send({from: accounts[0], gas: '1000000'});

    console.log('Contract deployed to ',result.options.address);
    provider.engine.stop();
};

deploy();
