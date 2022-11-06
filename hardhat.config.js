require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
const { API_URL, PRIVATE_KEY } = process.env ;
module.exports = {
  solidity: "0.8.0",
   defaultNetwork: "goerli",
   networks:{
      hardhat:{},
      goerli:{

        url:"https://eth-goerli.g.alchemy.com/v2/moh2vvLvVu6uBaELa2GLxwCkGjXdfHb0",
        accounts:[`0x${PRIVATE_KEY}`],
      },
      
    },
  
};