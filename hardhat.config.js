require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const BSCTEST_PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    bsctest: {
      url: `https://endpoints.omniatech.io/v1/bsc/testnet/public`,
      accounts: [BSCTEST_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};
