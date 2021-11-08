//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;
import "hardhat/console.sol";

contract Lottery {
    uint bidCost = 0.001 ether;
    uint latestBlock;
    address latestBidder;
    uint constant BLOCK_DIST = 3;
    uint stackedAmount = 0;
    mapping(address => uint) rewards;

    event BidPlaced(address bidder, uint);
    event RewardClaimed(address claimer, uint rewardAmount);

    modifier canBid {
        require(msg.sender != address(0), "Address not valid");
        require(msg.value >= bidCost, "Insufficient bid cost");
        _;
    }

    function calcReward() private {
        console.log("Lottery.calcReward.block.number => ", block.number);
        if((block.number - latestBlock) >= BLOCK_DIST) {
            rewards[latestBidder] += stackedAmount;
            stackedAmount = 0;
        }
    }


    function placeBid() canBid  external payable {
        calcReward();
        stackedAmount += msg.value;
        latestBlock = block.number;
        latestBidder = msg.sender;
        emit BidPlaced(msg.sender, block.number);
    }

    function claimTreasure() external  {
        require(msg.sender != address(0), "Address not valid");
        calcReward();
        require(rewards[msg.sender] > 0, "None claimable reward");

        uint rewardAmount = rewards[msg.sender];
        rewards[msg.sender] = 0;
        (bool sent, ) = msg.sender.call{value: rewardAmount}("");
        require(sent == true, "Eth transfer failed");

        emit RewardClaimed(msg.sender, rewardAmount);
    }

    function getClaimableBalance(address _address) public view returns(uint) {
        require(_address != address(0), "Address not valid");
        return rewards[_address];
    }

    function getStakedBalance() external view returns(uint) {
        console.log("Lottery.getStakedBalance.block.number => ", block.number);
        return stackedAmount;
    }

    function calculateRewards(uint _amount) public {
        require(msg.sender != address(0), "Address not valid");
        console.log("Lottery.calculateRewards._amount => ", _amount);
        console.log("Lottery.calculateRewards.msg.sender => ", msg.sender);
        calcReward();
    }
}