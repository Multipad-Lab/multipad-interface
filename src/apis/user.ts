import axios from "axios"
import { VITE_API_DOMAIN } from "src/const/env"
import { ProjectStatusType } from "src/types/projectList"
import { LaunchpadType } from "src/types/viiewPool"

const instance = axios.create({
  baseURL: `https://${VITE_API_DOMAIN}/`,
  headers: {
    "Content-Type": "application/json"
  }
})

export type FilterLaunchpad = {
  time?: {
    startDate: string
    endDate: string
  }
  type?: LaunchpadType | null
  tab?: ProjectStatusType
  searchText?: string
  page?: number
  limit?: number
}

export const filterLaunchpads = async (params: FilterLaunchpad) => {
  return await instance.post("project/filter-launchpad", params)
}
