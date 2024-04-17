import { AdminProjectFilterType, AdminProjectStatusLabelEnum, AdminProjectStatusType } from "src/types/adminProjectList"
import { PER_PAGE } from "."

export const tabList: { label: AdminProjectStatusLabelEnum; value: AdminProjectStatusType }[] = [
  {
    label: AdminProjectStatusLabelEnum.INACTIVE,
    value: 1
  },
  {
    label: AdminProjectStatusLabelEnum.ACTIVE,
    value: 0
  }
]

export const adminFilterInit: AdminProjectFilterType = {
  status: 1,
  name: "",
  page: 1,
  limit: PER_PAGE
}
