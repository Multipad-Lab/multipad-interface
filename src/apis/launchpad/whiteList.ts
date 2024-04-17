import httpRequest from "src/utils/services/httpRequest"

type CheckWhiteListParams = {
  launchpad: string // _id
  userAddress: string
}
export function checkWhiteList(params: CheckWhiteListParams) {
  return httpRequest.post<{ data: boolean }>(`/launchpad/whitelist/check`, params)
}

export function getWhiteList(launchpadId: string) {
  return httpRequest.get<{ data: string[] }>(`/launchpad/whitelist/list/${launchpadId}`)
}

type UpdateLaunchpadType = {
  launchpad: string // _id
  userAddress: string[]
}
export function updateWhiteList(params: UpdateLaunchpadType) {
  return httpRequest.post(`/launchpad/whitelist/update`, params)
}
