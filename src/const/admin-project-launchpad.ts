import { AdminLaunchpadFormType } from "src/types/adminLaunchpadList"

export const initForm: AdminLaunchpadFormType = {
  contractAddress: "",
  chain: "",
  type: 0,
  minBuy: "",
  maxBuy: "",
  softCap: "0",
  hardCap: "",
  startAt: 0,
  endAt: 0,
  claimAt: 0,
  totalRaise: "",
  cliffTime: "",
  linearTime: "",
  vestingEnable: 0,
  tgeRate: "",
  vestingDelay: ""
}

export const chainList = [
  {
    name: "Binance Smart Chain",
    chainId: 97,
    paymentAddress: "0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
    decimal: 18,
    symbol: "BNB"
  }
]
