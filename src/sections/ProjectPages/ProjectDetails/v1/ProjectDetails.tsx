import Slider from "../Slider"
import ProjectDetailsStyleWrapper from "./ProjectDetails.style"
import MultipadTabs from "../MultipadTabs"
import { useState } from "react"
import Description from "../Description/Description"
import TokenSale from "../TokenSale/TokenSale"
import { useGetProjectData } from "src/hooks/project-details/useGetProjectData"
import Spin from "src/components/Spin/Spin"

const ProjectDetails = () => {
  const { projectData, loadingInit } = useGetProjectData()
  const [tabActive, setTabActive] = useState(1)

  const handleChangeTab = (tab: number) => {
    setTabActive(tab)
  }

  return (
    <ProjectDetailsStyleWrapper>
      <Spin spinning={loadingInit}>
        <>
          <div className='container'>
            <div className='multipad-header'>
              <div className='multipad-header__info'>
                <div
                  className='multipad-header__logo'
                  style={{ backgroundImage: `url(${projectData?.logoUrl})` }}
                ></div>

                <div className='multipad-header__slogan'>
                  <h1>{projectData?.name || ""}</h1>
                  {/* <div className='dsc'>{projectData?.description || ""}</div> */}
                </div>
              </div>
            </div>
          </div>

          <div className='project-details'>
            <div className='container'>
              <Slider projectData={projectData} />
            </div>

            <div className='project-details-content'>
              <div className='project-details-tabs'>
                <div className='container'>
                  <MultipadTabs active={tabActive} onChange={handleChangeTab} />
                </div>
              </div>

              <div className='container'>
                {tabActive === 1 && <Description projectData={projectData} />}
                {tabActive === 2 && <TokenSale projectData={projectData} />}
              </div>
            </div>
          </div>
        </>
      </Spin>
    </ProjectDetailsStyleWrapper>
  )
}

export default ProjectDetails
