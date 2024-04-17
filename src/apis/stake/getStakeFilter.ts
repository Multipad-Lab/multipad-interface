import queryString from "query-string"
import httpRequest from "src/utils/services/httpRequest"
import { Address } from "viem/accounts"

interface StakeParams {
  chainId: number
  sortBy?: string
  orderBy?: "asc" | "desc"
}

export interface StakeFilter {
  _id: string
  duration: number
  status: boolean
  name: string
  idOnChain: number
  address: Address
  chainId: number
  stakeToken: Address
  rewardToken: string
  multiplier: string
  durationText: string
  minTimeClaimReward: number
  minTimeClaimRewardText: string
  apr: number
  createdAt: string
  updatedAt: string
  minStake: number
}

export function getStakeFilter(params: StakeParams) {
  const paramsString = queryString.stringify(params)

  return httpRequest.get<{ data: StakeFilter[] }>(`/stake/filter?${paramsString}`)
}
