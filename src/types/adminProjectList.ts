export type AdminProjectFilterType = {
  status: AdminProjectStatusType
  name: string
  page: number
  limit: number
}

export enum AdminProjectStatusLabelEnum {
  ACTIVE = "Active",
  INACTIVE = "Inactive"
}
export type AdminProjectStatusType = 0 | 1 // 0: active, 1: inactive
export type AdminProjectItemType = AdminProjectFormType & {
  uuid: string
  createdAt: string
}

export type AdminProjectFormType = {
  name: string
  logoUrl: string
  backgroundUrl: string
  images: string
  description: string
  fulltextInfoProject: string
  website: string
  telegram: string
  twitter: string
  ownerAddress: string // ex: "0x9D9CA239b07EB25725b1a271A8072a23E369C9Fe"
  tokenAddress: string // token for buy ex: "0x9D9CA239b07EB25725b1a271A8072a23E369C9Fe"
  paymentAddress: string // stable coin address for pay "0x0000000000000000000000000000000000000000" - bnb
  chain: number | string // chain id ex: 97
  tokenSymbol: string // token for buy symbol - ex: MLP
  paymentSymbol: string // stable coin symbol - ex: BNB
  tokenDecimal: number | string // token for buy decimal - ex: 18
  paymentDecimal: number | string // stable coin decimal - ex: 18
  totalSupply: number | string
  label: string[]
  status: AdminProjectStatusType
}

export type AdminProjectRequestType = Omit<AdminProjectFormType, "images"> & { images: string[] }

export type AdminProjectResponseType = {
  name: string
  logoUrl: string
  backgroundUrl: string
  images: string[]
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
  totalSupply: number | string
  label: string[]
  status: AdminProjectStatusType
  _id?: string
}

export type DataOnChainType = {
  totalRaised: number
  hardCap: number
  purchaseAmount: number
  receiveAmount: number
  vestedAmount: number
  withdrawAmount: number
  buyAmountOfTier: bigint
  launchpadStatus: any
  balance: number
  balanceOf: number
  allowance: bigint
  vestingDelay: number
  refundAmount: number
  vestingStep: number
  vestingTime: number
  refetch: () => void
}
