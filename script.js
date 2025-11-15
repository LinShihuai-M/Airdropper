const hre = require("hardhat");

async function main() {
  const Airdropper = await hre.ethers.deployContract("Airdropper");
  await Airdropper.waitForDeployment();
  console.log("Airdropper deployed to:", await Airdropper.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});