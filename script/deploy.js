async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
    
    const TokenFactory = await ethers.getContractFactory("Token");
    const Token = await TokenFactory.deploy();
  
    console.log("Token address:", await Token.getAddress());
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });