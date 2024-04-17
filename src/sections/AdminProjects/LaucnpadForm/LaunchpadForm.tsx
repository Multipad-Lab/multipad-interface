import LaunchpadFormStyleWrapper from "./LaunchpadForm.style.ts"
import ApplyForm from "./ApplyForm/ApplyForm.js"
import { Link, useParams } from "react-router-dom"
import { routesName } from "src/const/routes.ts"
import { routeTo } from "src/utils/services/routes.ts"
import redirectIcon from "src/assets/images/icons/redirect-icon.svg"
import { useState } from "react"
import Button from "src/components/button/Button.tsx"
import Empty from "src/components/Empty/Empty.tsx"
import { useInitProject } from "src/hooks/admin-project-launchpad/useInitProject.ts"
import Spin from "src/components/Spin/Spin.tsx"
import LaunchpadCard from "./LaunchpadCard/LaunchpadCard.tsx"
import { LaunchpadItemType } from "src/types/viiewPool.ts"

const LaunchpadForm = () => {
  const { id } = useParams()
  const [openForm, setOpenForm] = useState<{ isOpen: boolean; launchpad?: LaunchpadItemType }>({ isOpen: false })
  const { loadingInit, projectData, launchpadList, fetchLaunpadList } = useInitProject()

  const handleAfterSubmitForm = () => {
    fetchLaunpadList()
    setOpenForm({ isOpen: false })
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <LaunchpadFormStyleWrapper>
      <Spin spinning={loadingInit}>
        <div className='container'>
          <div className='back-button'>
            <Link style={{ color: "#ffffff" }} to={`${routeTo(routesName.ADMIN_PROJECT_DETAILS, { id })}`}>
              <img src={redirectIcon} alt='redirect-icon' />
              Project Details
            </Link>
          </div>

          <div style={{ marginTop: 30 }}>
            <h5>Launchpad List</h5>
            <div>
              {launchpadList.length ? (
                <div className='launchpad-list'>
                  {launchpadList.map((item) => {
                    return (
                      <div
                        key={item.uuid}
                        className='launchpad-item'
                        onClick={() => setOpenForm({ isOpen: true, launchpad: item })}
                      >
                        <LaunchpadCard data={item} projectData={projectData} />
                      </div>
                    )
                  })}
                </div>
              ) : (
                <Empty />
              )}
            </div>
          </div>

          {projectData?.status === 0 && (
            <Button
              variant={launchpadList.length >= 3 ? "dark" : "outline"}
              sm
              style={{ width: 250, marginTop: 30, cursor: launchpadList.length >= 3 ? "not-allowed" : "pointer" }}
              onClick={(e: any) => {
                e.preventDefault()

                if (launchpadList.length >= 3) return
                setOpenForm({ isOpen: true })
              }}
            >
              Create Launchpad
            </Button>
          )}

          <div className='row'>
            <div className='offset-lg-3 col-lg-6 offset-md-1 col-md-10 col-sm-12'>
              {openForm.isOpen && (
                <ApplyForm
                  launchpad={openForm.launchpad}
                  projectData={projectData}
                  handleAfterSubmitForm={handleAfterSubmitForm}
                  launchpadList={launchpadList}
                />
              )}
            </div>
          </div>
        </div>
      </Spin>
    </LaunchpadFormStyleWrapper>
  )
}

export default LaunchpadForm
