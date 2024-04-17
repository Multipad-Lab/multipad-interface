import { useContext, useEffect, useState } from "react"
import { AdminProjectListContext } from "src/utils/AdminProjectListProvider"
import { AdminProjectFilterType, AdminProjectItemType } from "src/types/adminProjectList"
import { adminFilterInit, tabList } from "src/const/admin-project-list"
import { getProjectList } from "src/apis/admin"

export const useProjectListData = () => {
  const { searchText } = useContext(AdminProjectListContext)
  const [projects, setProjects] = useState<AdminProjectItemType[]>([])
  const [filter, setFilter] = useState<AdminProjectFilterType>(adminFilterInit)
  const [totalPages, setTotalPages] = useState(0)
  const [loading, setLoading] = useState(false)

  const handleChangeTab = (index: number) => {
    setFilter({ ...filter, status: tabList[index].value, page: 1 })
  }

  const handleChangeFilter = (
    field: keyof AdminProjectFilterType,
    value: AdminProjectFilterType[keyof AdminProjectFilterType]
  ) => {
    setFilter({ ...filter, [field]: value })
  }

  useEffect(() => {
    setLoading(true)
    getProjectList({ filter })
      .then((res: any) => {
        const data: AdminProjectItemType[] = res.data.docs
        const totalPages = res.data.totalPages
        setProjects(data)
        setTotalPages(totalPages)
      })
      .finally(() => setLoading(false))
  }, [filter])

  useEffect(() => {
    setFilter({ ...filter, name: searchText.trim() })
  }, [searchText])

  return {
    projects,
    totalPages,
    loading,
    filter,
    handleChangeTab,
    handleChangeFilter
  }
}
