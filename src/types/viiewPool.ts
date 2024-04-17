import { AdminProjectStatusType } from "./adminProjectList"

export type PoolData = {
  name: string
  dsc: string
  symbol: string
  label: string
  address: string
  join_network: string
  token_network: string
  pool_icon?: string
  rate: number
  ido_suply: number
  total_suply: number
}

export type LaunchpadItemType = {
  _id: string
  contractAddress: string
  chain: number
  paymentAddress: string
  ownerAddress: string
  type: LaunchpadType
  minBuy: string
  maxBuy: string
  softCap: string
  hardCap: string
  startAt: number // 1708707600
  endAt: number
  totalCurrent: string // "0"
  totalRaise: string // "1000000000000000000000" -> divide 10^decimal
  claimAt: number // 1708707600
  isVesting: number
  isFcfs: number
  isWhitelist: number
  isKYC: number
  userKYC: number
  ignoreFullSlot: number
  status: AdminProjectStatusType
  project: string
  uuid: string
  createdAt: string // "2024-02-22T13:22:41.575Z"
  updatedAt: string // "2024-02-22T13:22:41.575Z"
  __v: number
  role?: LaunchpadRolesEnum
  cliffTime: number
  tgeRate: number
  linearTime: number
  vestingText: string
  vestingDelay: number
}

export enum LaunchpadType {
  GUARANTEED,
  COMMUNITY,
  FCFS
}

export const LaunchpadName = {
  [LaunchpadType.GUARANTEED]: "GUARANTEED",
  [LaunchpadType.COMMUNITY]: "COMMUNITY",
  [LaunchpadType.FCFS]: "FCFS"
}

export enum LaunchpadRolesEnum {
  WHITELISTED = "whitelisted",
  NO_WHITELISTED = "no_whitelisted"
}

export type SignatureResponse = {
  data: { amount?: number; tier?: string; isStaking?: boolean; timestamp?: string; isWhitelist?: boolean }
  signature?: string
}

export type SignatureClaimResponse = {
  data: { tier: string; timestamp: number }
  signature: string
}
