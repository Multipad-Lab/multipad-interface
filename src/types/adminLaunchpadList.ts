import { LaunchpadType } from "./viiewPool"

export type AdminLaunchpadFormType = {
  contractAddress: string
  chain: number | string
  type: LaunchpadType
  minBuy: string
  maxBuy: string
  softCap: string
  hardCap: string
  startAt: number
  endAt: number
  claimAt: number
  totalRaise: string
  cliffTime: string
  tgeRate: string
  vestingEnable: 0 | 1
  vestingDelay: string
  linearTime: string
}

export const notRequiredFields = [
  "contractAddress",
  "type",
  "ownerAddress",
  "paymentAddress",
  "claimAt",
  "vestingEnable",
  "chain",
  "projectId"
]
