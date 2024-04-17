import { AdminProjectStatusType } from "./adminProjectList"
import { LaunchpadType } from "./viiewPool"

export enum LaunchpadStatus {
  PENDING,
  ACTIVE,
  ENDED,
  CANCELLED,
  LISTED
}

export enum ELaunchpadStatus {
  PENDING,
  INPROGRESS,
  END,
  CANCEL,
  SUCCESS,
  FAILED,
  DELETED
}

export enum ELaunchpadStatusString {
  OPEN = "open",
  UPCOMMING = "upcomming",
  PAST = "past"
}

export type UserLaunchpadFormType = {
  _id: string
  contractAddress: string
  chain: number | string
  projectId: string
  type: LaunchpadType
  ownerAddress: string
  paymentAddress: string
  minBuy: string
  maxBuy: string
  softCap: string
  hardCap: string
  startAt: number
  endAt: number
  claimAt: number
  totalRaise: string
  vestingDuration: string
  vestingRate: string
  status: AdminProjectStatusType
  vestingDelay: string
  totalCurrent: string
  project: UserProjectFormType
  uuid?: string
  tgeRate: number
}

export type UserProjectFormType = {
  name: string
  logoUrl: string
  backgroundUrl: string
  description: string
  fulltextInfoProject: string
  website: string
  telegram: string
  twitter: string
  medium: string
  ownerAddress: string // ex: "0x9D9CA239b07EB25725b1a271A8072a23E369C9Fe"
  tokenAddress: string // token for buy ex: "0x9D9CA239b07EB25725b1a271A8072a23E369C9Fe"
  paymentAddress: string // stable coin address for pay "0x0000000000000000000000000000000000000000" - bnb
  chain: number | string // chain id ex: 97
  tokenSymbol: string // token for buy symbol - ex: MLP
  paymentSymbol: string // stable coin symbol - ex: BNB
  tokenDecimal: number | string // token for buy decimal - ex: 18
  paymentDecimal: number | string // stable coin decimal - ex: 18
  pricePer: number | string // price of token for buy - ex: 0.001 (USDT)
  pricePerText: string // ex: 1 MLP = 0.001 USDT,
  totalSupply: number | string
  label: string[]
  status: AdminProjectStatusType
  _id?: string
  uuid?: string
}
