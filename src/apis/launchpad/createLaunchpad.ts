import httpRequest from "src/utils/services/httpRequest"

export function createLaunchpad(chainId: number) {
  return httpRequest.post<{
    statusCode: number
    data: {
      signature: string
      data: {
        countUsers: number[]
        arrayTier: number[]
        timestamp: number
      }
    }
  }>(`/signature/create-launchpad`, { chain: chainId })
}
