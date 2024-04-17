import { useEffect, useState } from "react"
import { StakeFilter, getStakeFilter } from "src/apis/stake/getStakeFilter"

export const useStakeData = ({ chainIdActive }: { chainIdActive?: number }) => {
  const [packageList, setPackageList] = useState<StakeFilter[]>([])
  const [loading, setLoading] = useState(false)
  const [packageActive, setPackageActive] = useState<StakeFilter>()

  useEffect(() => {
    if (!chainIdActive) return

    setLoading(true)
    getStakeFilter({ chainId: chainIdActive, sortBy: "idOnChain", orderBy: "asc" })
      .then((res) => {
        setPackageList(res.data)
        setPackageActive(res.data?.[0])
      })
      .finally(() => {
        setLoading(false)
      })
  }, [chainIdActive])

  const handleChangePackageActive = (value: StakeFilter) => {
    setPackageActive(value)
  }

  return {
    packageList,
    loading,
    packageActive,
    handleChangePackageActive
  }
}
