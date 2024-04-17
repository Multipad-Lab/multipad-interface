import { useContext, useEffect, useState } from "react"
import { tabList } from "src/const/project-list"
import { ProjectListContext } from "src/utils/ProjectListProvider"
import { FilterLaunchpad, filterLaunchpads } from "src/apis/user"
import { ELaunchpadStatusString, UserLaunchpadFormType } from "src/types/userLaunchpadList"
import { PER_PAGE } from "src/const"

export const useProjectListData = ({ limit, tab }: { limit?: number; tab?: ELaunchpadStatusString } = {}) => {
  const { searchText } = useContext(ProjectListContext)
  const [launchpads, setLaunchpads] = useState<UserLaunchpadFormType[]>([])
  const [filter, setFilter] = useState<FilterLaunchpad>({
    tab: tab || ELaunchpadStatusString.OPEN,
    type: null,
    searchText: "",
    page: 1,
    limit: limit || PER_PAGE
  })
  const [totalPages, setTotalPages] = useState(2)
  const [loading, setLoading] = useState(false)

  const handleChangeTab = (index: number) => {
    setFilter({ ...filter, tab: tabList[index].value, page: 1 })
  }

  const handleChangeFilter = (field: keyof FilterLaunchpad, value: FilterLaunchpad[keyof FilterLaunchpad]) => {
    setFilter({ ...filter, [field]: value })
  }

  const handleFilterLaunchpads = () => {
    setLoading(true)
    filterLaunchpads(filter)
      .then((res) => {
        const data = res.data.data.docs.filter((item: any) => item.project !== null)
        const totalPage = data.length ? res.data.data.totalPages : 0
        setLaunchpads(data)
        setTotalPages(totalPage)
        setLoading(false)
      })
      .catch(() => {
        setLaunchpads([])
        setTotalPages(0)
        setLoading(false)
      })
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    handleFilterLaunchpads()
  }, [filter])

  useEffect(() => {
    setFilter({ ...filter, searchText: searchText?.trim() })
  }, [searchText])

  const handleRefresh = () => {
    handleFilterLaunchpads()
  }

  return {
    launchpads,
    totalPages,
    loading,
    filter,
    handleChangeTab,
    handleChangeFilter,
    onRefresh: handleRefresh
  }
}
