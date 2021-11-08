import { expect } from "chai";
import hre, { ethers } from "hardhat";

async function mineBlocks() {
  for (let i = 0; i < 3; i++)
    await hre.network.provider.request({
      method: "evm_mine",
      params: [],
    });
}

describe("Lottery", function () {
  let lottery: any;
  let bidCost = ethers.utils.parseEther("0.001 ether");
  beforeEach(async function () {
    const Lottery = await ethers.getContractFactory("Lottery");
    const lottery = await Lottery.deploy();
    await lottery.deployed();
  });

  it("", async function () {
    const accounts = await hre.ethers.getSigners();
    lottery.placeBid();
  });
});
