const ethers = require('ethers');
const network = require('./__network')();

module.exports = function() {
    const provider = new ethers.providers.JsonRpcProvider( network.url );
    return provider;
}
