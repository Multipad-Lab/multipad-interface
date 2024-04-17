import ProjectItems from "./ProjectItems/ProjectItems"
import ProjectsListStyleWrapper from "./ProjectsList.style"
import Button from "src/components/button"
import { useNavigate } from "react-router-dom"
import { routeTo } from "src/utils/services/routes"
import { routesName } from "src/const/routes"

const ProjectsList = () => {
  const navigate = useNavigate()

  return (
    <ProjectsListStyleWrapper>
      <div className='container' style={{ paddingTop: 30 }}>
        <Button
          variant={"outline"}
          sm
          style={{ width: 250 }}
          onClick={(e: any) => {
            e.preventDefault()

            navigate(routeTo(routesName.ADMIN_PROJECT_CREATE))
          }}
        >
          Create Project
        </Button>
      </div>

      <ProjectItems />
    </ProjectsListStyleWrapper>
  )
}

export default ProjectsList
