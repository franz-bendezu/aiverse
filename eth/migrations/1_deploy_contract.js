const NFT_Contract = artifacts.require("aiverseNFT");

module.exports = function (deployer) {
  deployer.deploy(NFT_Contract);
};