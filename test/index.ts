import { BigNumber } from "@ethersproject/bignumber";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import hre, { ethers } from "hardhat";
import { Lottery } from "../types";

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

  it("placeBid should work", async function () {
    await lottery.connect(testA).placeBid({
      value: bidCost,
    });

    await lottery.connect(testB).placeBid({
      value: bidCost,
    });

    await mineBlocks(5);

    const aClaimableBalance = await lottery.getClaimableBalance(testA.address);
    expect(aClaimableBalance).to.equal(ethers.utils.parseEther("0"));

    const stakedBalance = await lottery.getStakedBalance();
    expect(stakedBalance).to.equal(ethers.utils.parseEther("0.002"));

    await lottery.connect(testB).calcReward();
    const bClaimableBalance = await lottery.getClaimableBalance(testB.address);
    expect(bClaimableBalance).to.equal(ethers.utils.parseEther("0.002"));
  });

  it("claimTeasure should work", async function () {
    await lottery.connect(testA).placeBid({
      value: bidCost,
    });

    await lottery.connect(testB).placeBid({
      value: bidCost,
    });
    await mineBlocks(5);

    await lottery.connect(testB).calcReward();
    const claimableBalance = await lottery.getClaimableBalance(testB.address);
    expect(claimableBalance).to.equal(ethers.utils.parseEther("0.002"));

    await lottery.connect(testB).claimTreasure();
    const restBalance = await lottery.getClaimableBalance(testB.address);
    expect(restBalance).to.equal(ethers.utils.parseEther("0"));
  });
});
