import { SignatureClaimResponse, SignatureResponse } from "src/types/viiewPool"
import httpRequest from "src/utils/services/httpRequest"

export type SignatureParamsType = {
  amount: string
  chain: number
}

export function signature(params: SignatureParamsType) {
  return httpRequest.post<{ data: SignatureResponse }>(`/signature/buy`, { ...params })
}

export type SignatureClaimParamsType = {
  chain: number
}

export function signatureClaim(params: SignatureClaimParamsType) {
  return httpRequest.post<{ data: SignatureClaimResponse }>(`/signature/vesting`, { ...params })
}

export function signatureBuyCommunity(params: { chain: number; launchpadId: string; amount: string }) {
  return httpRequest.post<{ data: SignatureResponse }>(`/signature/buy-community`, { ...params })
}
