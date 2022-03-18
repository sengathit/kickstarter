import web3 from "./web3";

import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x0Fc0D2c6FC275faE9A317A57c4B6eEa68C2518D4'
);

export default instance;