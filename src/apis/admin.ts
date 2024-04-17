import { AdminProjectFilterType, AdminProjectRequestType } from "src/types/adminProjectList"
import axios, { AxiosResponse } from "axios"
import { LaunchpadItemType } from "src/types/viiewPool"
import { AdminLaunchpadFormType } from "src/types/adminLaunchpadList"
import httpRequest from "src/utils/services/httpRequest"
import { VITE_API_DOMAIN } from "src/const/env"

export const createProject = async ({ body }: { body: AdminProjectRequestType }) => {
  return await httpRequest.post(`https://${VITE_API_DOMAIN}/project`, body)
}

export const updateProject = async ({ body, uuid }: { body: AdminProjectRequestType; uuid: string }) => {
  return await httpRequest.put(`https://${VITE_API_DOMAIN}/project/${uuid}`, body)
}

export const getProject = async ({ uuid }: { uuid: string }) => {
  return await fetch(`https://${VITE_API_DOMAIN}/project/${uuid}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  })
}

export const getProjectList = async ({ filter }: { filter: AdminProjectFilterType }) => {
  return await httpRequest.post(`https://${VITE_API_DOMAIN}/project/list`, filter)
}

export const getLaunchpadList = async (_id: string) => {
  try {
    return await axios.get(`https://${VITE_API_DOMAIN}/project/list-launchpad/${_id}`)
  } catch (error) {
    return error
  }
}

export const getLaunchpadDetails = async (uuid: string) => {
  const response: AxiosResponse = await axios.get(`https://${VITE_API_DOMAIN}/project/launchpad/${uuid}`)
  const data: { data: LaunchpadItemType } = response.data
  return data
}

export const updateLaunchpad = async ({ body, uuid }: { body: Partial<AdminLaunchpadFormType>; uuid: string }) => {
  return await httpRequest.put(`https://${VITE_API_DOMAIN}/project/launchpad/${uuid}`, body)
}
