import ProjectCreateFormStyleWrapper from "./ProjectCreateForm.style.ts"
import ApplyForm from "./ApplyForm/ApplyForm.js"

const ProjectCreateForm = () => {
  return (
    <ProjectCreateFormStyleWrapper>
      <div className='container'>
        <div className='row'>
          <div className='offset-lg-3 col-lg-6 offset-md-1 col-md-10 col-sm-12'>
            <ApplyForm />
          </div>
        </div>
      </div>
    </ProjectCreateFormStyleWrapper>
  )
}

export default ProjectCreateForm
