/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface LotteryInterface extends ethers.utils.Interface {
  functions: {
    "calculateRewards(uint256)": FunctionFragment;
    "claimTreasure()": FunctionFragment;
    "getClaimableBalance(address)": FunctionFragment;
    "getStakedBalance()": FunctionFragment;
    "placeBid()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "calculateRewards",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claimTreasure",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getClaimableBalance",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getStakedBalance",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "placeBid", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "calculateRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimTreasure",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getClaimableBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStakedBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "placeBid", data: BytesLike): Result;

  events: {
    "BidPlaced(address,uint256)": EventFragment;
    "RewardClaimed(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BidPlaced"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardClaimed"): EventFragment;
}

export type BidPlacedEvent = TypedEvent<
  [string, BigNumber] & { bidder: string; arg1: BigNumber }
>;

export type RewardClaimedEvent = TypedEvent<
  [string, BigNumber] & { claimer: string; rewardAmount: BigNumber }
>;

export class Lottery extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: LotteryInterface;

  functions: {
    calculateRewards(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "calculateRewards(uint256)"(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimTreasure(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "claimTreasure()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getClaimableBalance(
      _address: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getClaimableBalance(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getStakedBalance(overrides?: CallOverrides): Promise<[BigNumber]>;

    "getStakedBalance()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    placeBid(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "placeBid()"(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  calculateRewards(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "calculateRewards(uint256)"(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimTreasure(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "claimTreasure()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getClaimableBalance(
    _address: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getClaimableBalance(address)"(
    _address: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getStakedBalance(overrides?: CallOverrides): Promise<BigNumber>;

  "getStakedBalance()"(overrides?: CallOverrides): Promise<BigNumber>;

  placeBid(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "placeBid()"(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    calculateRewards(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "calculateRewards(uint256)"(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    claimTreasure(overrides?: CallOverrides): Promise<void>;

    "claimTreasure()"(overrides?: CallOverrides): Promise<void>;

    getClaimableBalance(
      _address: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getClaimableBalance(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStakedBalance(overrides?: CallOverrides): Promise<BigNumber>;

    "getStakedBalance()"(overrides?: CallOverrides): Promise<BigNumber>;

    placeBid(overrides?: CallOverrides): Promise<void>;

    "placeBid()"(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "BidPlaced(address,uint256)"(
      bidder?: null,
      undefined?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { bidder: string; arg1: BigNumber }
    >;

    BidPlaced(
      bidder?: null,
      undefined?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { bidder: string; arg1: BigNumber }
    >;

    "RewardClaimed(address,uint256)"(
      claimer?: null,
      rewardAmount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { claimer: string; rewardAmount: BigNumber }
    >;

    RewardClaimed(
      claimer?: null,
      rewardAmount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { claimer: string; rewardAmount: BigNumber }
    >;
  };

  estimateGas: {
    calculateRewards(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "calculateRewards(uint256)"(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimTreasure(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "claimTreasure()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getClaimableBalance(
      _address: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getClaimableBalance(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStakedBalance(overrides?: CallOverrides): Promise<BigNumber>;

    "getStakedBalance()"(overrides?: CallOverrides): Promise<BigNumber>;

    placeBid(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "placeBid()"(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    calculateRewards(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "calculateRewards(uint256)"(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimTreasure(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "claimTreasure()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getClaimableBalance(
      _address: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getClaimableBalance(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getStakedBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getStakedBalance()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    placeBid(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "placeBid()"(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
