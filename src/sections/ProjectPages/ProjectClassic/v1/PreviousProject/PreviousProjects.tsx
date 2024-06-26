import { SectionTitle } from "src/components/sectionTitle"
import ProjectCard from "./ProjectCard/ProjectCard"
import Pagination from "src/components/pagination/Pagination"
import PreviousProjectsStyleWrapper from "./PreviousProjects.style"
import data from "src/assets/data/projects/previousProjects"

const PreviousProjects = () => {
  return (
    <PreviousProjectsStyleWrapper className='previous_projects'>
      <div className='container'>
        <SectionTitle title='COMPLETE PROJECTS ' subtitle='COMPLETE PROJECTS' />

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

        <Pagination totalPages={5} activePage={1} />
      </div>
    </PreviousProjectsStyleWrapper>
  )
}

export default PreviousProjects
