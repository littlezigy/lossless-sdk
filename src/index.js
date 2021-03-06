const ethers = require('ethers');
const losslessController = require('./losslessControllerV3');
const losslessGovernance = require('./losslessGovernance');
const losslessReporting = require('./losslessReporting');
const losslessStaking = require('./losslessStaking');
const setupProvider = require('./setupProvider');

module.exports = {
    ...losslessController,
    ...losslessGovernance,
    ...losslessReporting,
    ...losslessStaking,
    ethers,
    provider: setupProvider()
}
