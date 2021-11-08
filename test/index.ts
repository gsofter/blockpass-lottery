import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { Signer } from "ethers";
import hre, { ethers } from "hardhat";
import { Lottery } from "../src/types";

async function mineBlocks(blocks: Number) {
  for (let i = 0; i < blocks; i++)
    await hre.network.provider.request({
      method: "evm_mine",
      params: [],
    });
}

describe("Lottery", function () {
  let lottery: Lottery;
  const bidCost = ethers.utils.parseEther("0.001");
  let testA: SignerWithAddress;
  let testB: SignerWithAddress;
  let accounts: SignerWithAddress[];

  beforeEach(async function () {
    const LotteryContract = await ethers.getContractFactory("Lottery");
    lottery = await LotteryContract.deploy();
    await lottery.deployed();
    accounts = await hre.ethers.getSigners();
    testA = accounts[0];
    testB = accounts[1];
  });

  it("Should work with placeBid", async function () {
    console.log("lottery.address =>", lottery.address);

    await lottery.connect(testA).placeBid({
      value: bidCost,
    });

    await lottery.connect(testB).placeBid({
      value: bidCost,
    });

    await mineBlocks(5);

    let aClaimableBalance = await lottery.getClaimableBalance(testA.address);
    console.log("A.claimableBalance => ", aClaimableBalance);

    let bClaimableBalance = await lottery.getClaimableBalance(testB.address);
    console.log("B.claimableBalance => ", bClaimableBalance);

  await lottery.connect(testB).calculateRewards(1000);
    const stakedBalance = await lottery.getStakedBalance();
    expect(stakedBalance).to.equal(ethers.utils.parseEther("0.002"));

  

    bClaimableBalance = await lottery.getClaimableBalance(testB.address)

    expect(bClaimableBalance).to.equal(ethers.utils.parseEther('0.002'))

    // expect(aClaimableBalance).to.equal(ethers.utils.parseEther("0.002"));
    // expect(bClaimableBalance).to.equal(ethers.utils.parseEther("0.002"));
  });
});
