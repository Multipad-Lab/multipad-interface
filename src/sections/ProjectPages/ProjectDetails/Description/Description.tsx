import { AdminProjectResponseType } from "src/types/adminProjectList"
import DescriptionStyleWrapper from "./Description.style"
import Empty from "src/components/Empty/Empty"

const Description = ({ projectData }: { projectData?: AdminProjectResponseType }) => {
  return (
    <DescriptionStyleWrapper>
      {projectData?.fulltextInfoProject ? (
        <div className='content' dangerouslySetInnerHTML={{ __html: projectData.fulltextInfoProject }}></div>
      ) : (
        <div className='empty'>
          <Empty />
        </div>
      )}
    </DescriptionStyleWrapper>
  )
}

export default Description
