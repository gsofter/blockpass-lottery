//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

contract Lottery {
    uint bidCost = 0.0001 ether;
    uint latestBlock;
    address latestBidder;
    uint constant BLOCK_DIST = 3;
    uint stackedAmount = 0;
    mapping(address => uint) rewards;

    event BidPlaced(address bidder);
    event RewardClaimed(address claimer, uint rewardAmount);

    modifier canBid {
        require(msg.sender != address(0), "Address not valid");
        require(msg.value >= bidCost, "Insufficient bid cost");
        _;
    }

    function calcReward() private {
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
        emit BidPlaced(msg.sender);
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

    function getClaimableBalance() public returns(uint) {
        calcReward();
        return rewards[msg.sender];
    }
}