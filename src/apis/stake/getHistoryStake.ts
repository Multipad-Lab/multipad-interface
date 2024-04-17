import queryString from "query-string"
import httpRequest from "src/utils/services/httpRequest"
import { Address } from "viem/accounts"

interface HistoryStakeParams {
  chainId: number
  status?: HistoryStatus
  sortBy?: string
  createdAt?: string
  orderBy?: "asc" | "desc"
}

export enum HistoryStatus {
  ACTIVE,
  INACTIVE
}

export interface HistoryStake {
  _id: string
  chainId: number
  stakeContract: Address
  idOnChain: string
  tierId: string
  userAddress: string
  amount: number
  startTime: string
  endTime: string
  totalRewardClaimed: number
  status: HistoryStatus
  uuid: string
  canClaim: string
  __v: number
  stakePool: {
    duration: number
  }
}

export function getHistoryStake(params: HistoryStakeParams) {
  const paramsString = queryString.stringify(params)
  return httpRequest.get<{ data: HistoryStake[] }>(`/stake/user-history?${paramsString}`)
}
