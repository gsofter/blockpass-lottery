# Sample 3 BlockPass Win Lottery Game

Biders need to send 0.001 ether to participate in the lottery by calling `placeBid`.
If 3 blocks has been passed without someone bidding, whoever call the `placeBid` latest will be regarded as winner and staked amount would become claimable balance of him. Winners can widraw their rewards by calling `claimTreasure`.

### How to test

```shell
npx hardhat compile
npx hardhat test
```

### How to deploy

```shell
npx hardhat compile
npx hardhat run scripts/deploy.ts --network=<network>
```

To check more details for harthat CLI, check [here](https://hardhat.org/getting-started/#overview)

### Testing Cases

- `PlaceBid should work` success test
- `PlaceBid should not work` failure test
- `claimTreasure should work` success test
