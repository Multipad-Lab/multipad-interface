import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProject } from "src/apis/admin"
import { AdminProjectResponseType } from "src/types/adminProjectList"

export const useGetProjectData = () => {
  const [projectData, setProjectData] = useState<AdminProjectResponseType>()
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
            setProjectData(data)
          }
        })
        .finally(() => setLoadingInit(false))
    }
  }, [id])

  return {
    projectData,
    loadingInit
  }
}
