import { FiChevronRight } from "react-icons/fi"
import { SectionTitle, SectionTitleWrapper } from "src/components/sectionTitle"
import Button from "src/components/button"
import ProjectCard from "./ProjectCard/ProjectCard"
import PreviousProjectsStyleWrapper from "./PreviousProjects.style"
import data from "src/assets/data/projects/previousProjects"
import { routesName } from "src/const/routes"

const PreviousProjects = () => {
  return (
    <PreviousProjectsStyleWrapper>
      <div className='container'>
        <SectionTitleWrapper>
          <SectionTitle title='PREVIOUS IGO' subtitle='COMPLETE PROJECTS' />

          <Button href={routesName.PROJECTS} variant='outline' sm>
            {" "}
            View More <FiChevronRight />
          </Button>
        </SectionTitleWrapper>
        <div className='row'>
          <ul className='menu-list'>
            <li>Project name</li>
            <li>Chain</li>
            <li>Launched</li>
            <li>Total Raise</li>
            <li>Progress</li>
          </ul>
        </div>
        <div className='row align-items-center projects-row'>
          {data?.map((project, i) => (
            <div key={i} className='col-md-12'>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </PreviousProjectsStyleWrapper>
  )
}

export default PreviousProjects
