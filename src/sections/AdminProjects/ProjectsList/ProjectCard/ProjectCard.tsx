import CardHover from "src/components/cardHover"
import ProjectCardStyleWrapper from "./ProjectCard.style"
import { Link } from "react-router-dom"
import { Fragment } from "react"
import dayjs from "dayjs"
import { AdminProjectItemType } from "src/types/adminProjectList"
import advancedFormat from "dayjs/plugin/advancedFormat.js"
import ImgProfile from "src/components/image/Image"

type Props = AdminProjectItemType & {
  to?: string
}

dayjs.extend(advancedFormat)

const ProjectCard = ({ name, logoUrl, createdAt, to }: Props) => {
  let Component: any = Fragment

  if (to) {
    Component = Link
  }

  return (
    <Component to={to}>
      <ProjectCardStyleWrapper>
        <div className='previous-item hover-shape-border hover-shape-inner'>
          <div className='previous-gaming'>
            <div className='previous-image'>
              <ImgProfile path={logoUrl} />
            </div>
            <div className='previous-price'>
              <h4 className='mb-10'>
                <Component to={to}>{name}</Component>
              </h4>
            </div>
          </div>
          <div className={`previous-launched`}>{dayjs(createdAt).format("hh:mm A UTC, MMM Do YYYY")}</div>
          <CardHover />
        </div>
      </ProjectCardStyleWrapper>
    </Component>
  )
}

export default ProjectCard
