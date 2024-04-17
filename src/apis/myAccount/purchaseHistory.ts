import { LaunchpadType } from "src/types/viiewPool"
import httpRequest from "src/utils/services/httpRequest"
import { Address } from "viem"

export interface PurchaseHistoryParams {
  userAddress?: Address
  page: number
  limit: number
}

export interface PurchaseHistory {
  amount: string
  chain: number
  createdAt: string
  txHash: string
  type: 1
  updatedAt: string
  userAddress: string
  _id: string
  launchpad: {
    type: LaunchpadType
    project: {
      uuid: string
      name: string
    }
  }
}

export function purchaseHistory(params: PurchaseHistoryParams) {
  return httpRequest.post<{ data: { docs: PurchaseHistory[]; totalPages: number } }>("/auth/purchase-history", params)
}
