import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getLaunchpadList, getProject } from "src/apis/admin"
import { AdminProjectResponseType } from "src/types/adminProjectList"
import { LaunchpadItemType } from "src/types/viiewPool"

export const useGetPoolData = () => {
  const [poolData, setPoolData] = useState<AdminProjectResponseType>()
  const [launchpadList, setLaunchpadList] = useState<LaunchpadItemType[]>([])
  const [loadingInit, setLoadingInit] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    if (id) {
      setLoadingInit(true)

      getProject({ uuid: id })
        .then(async (res) => {
          if (res.ok) {
            const dataJSON: { data: AdminProjectResponseType } = await res.json()
            const data: AdminProjectResponseType = dataJSON.data
            setPoolData(data)
          }
        })
        .finally(() => setLoadingInit(false))
    }
  }, [id])

  useEffect(() => {
    if (poolData?._id) {
      setLoadingInit(true)

      getLaunchpadList(poolData._id)
        .then((res: any) => {
          if (res.data) {
            setLaunchpadList(res.data.data)
          }
        })
        .finally(() => setLoadingInit(false))
    }
  }, [poolData])

  const onRefesh = () => {
    if (poolData?._id) {
      setLoadingInit(true)

      getLaunchpadList(poolData._id)
        .then((res: any) => {
          if (res.data) {
            setLaunchpadList(res.data.data)
          }
        })
        .finally(() => setLoadingInit(false))
    }
  }

  return {
    poolData,
    launchpadList,
    loadingInit,
    onRefesh
  }
}
