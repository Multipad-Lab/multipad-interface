import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getLaunchpadList, getProject } from "src/apis/admin"
import { AdminProjectResponseType } from "src/types/adminProjectList"
import { LaunchpadItemType } from "src/types/viiewPool"

export const useInitProject = () => {
  const [projectData, setProjectData] = useState<AdminProjectResponseType>()
  const { id } = useParams()
  const [loadingInit, setLoadingInit] = useState(false)
  const [launchpadList, setLaunchpadList] = useState<LaunchpadItemType[]>([])

  useEffect(() => {
    if (id) {
      setLoadingInit(true)

      getProject({ uuid: id })
        .then(async (res) => {
          if (res.ok) {
            const dataJSON: { data: AdminProjectResponseType } = await res.json()
            const data: AdminProjectResponseType = dataJSON.data
            setProjectData(data)
          }
        })
        .finally(() => setLoadingInit(false))
    }
  }, [id])

  useEffect(() => {
    if (projectData?._id) {
      setLoadingInit(true)

      getLaunchpadList(projectData._id)
        .then((res: any) => {
          if (res.data) {
            setLaunchpadList(res.data.data)
          }
        })
        .finally(() => setLoadingInit(false))
    }
  }, [projectData])

  const fetchLaunpadList = () => {
    if (!projectData?._id) return

    setLoadingInit(true)
    getLaunchpadList(projectData._id)
      .then((res: any) => {
        if (res.data) {
          setLaunchpadList(res.data.data)
        }
      })
      .finally(() => setLoadingInit(false))
  }
  return { loadingInit, projectData, launchpadList, fetchLaunpadList }
}
