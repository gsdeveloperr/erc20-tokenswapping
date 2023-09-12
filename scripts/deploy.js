const hre = require("hardhat");

async function main() {
  //SingleSwapToken
  const SingleSwapToken = await hre.ethers.getContractFactory(
    "SingleSwapToken"
  );
  const singleSwapToken = await SingleSwapToken.deploy();
  await singleSwapToken.deployed();
  console.log(`SingleSwapToken deployed to ${singleSwapToken.address}`);

  //SwapMultiHop
  // const SwapMultiHop = await hre.ethers.getContractFactory("SwapMultiHop");
  // const swapMultiHop = await SwapMultiHop.deploy();
  // await swapMultiHop.deployed();
  // console.log(`swapMultiHop deployed to ${swapMultiHop.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
