import { Tab, Tabs, TabList } from "react-tabs"
import ProjectItemsStyleWrapper from "./ProjectItems.style"
import { routeTo } from "src/utils/services/routes"
import { routesName } from "src/const/routes"
import Pagination from "src/components/pagination/Pagination"
import Spin from "src/components/Spin/Spin"
import { useProjectListData } from "src/hooks/admin-project-list/useProjectListData"
import { tabList } from "src/const/admin-project-list"
import ProjectCard from "../ProjectCard/ProjectCard"
import Empty from "src/components/Empty/Empty"

const ProjectItems = () => {
  const { projects, totalPages, loading, filter, handleChangeTab, handleChangeFilter } = useProjectListData()

  return (
    <ProjectItemsStyleWrapper>
      <div className='container'>
        <div className='row'>
          <ul className='menu-list'>
            <li>Project name</li>
            <li>Created At</li>
          </ul>
        </div>
        <div className='projects-row'>
          <Tabs onSelect={(index) => handleChangeTab(index)}>
            <TabList>
              <div className='tab_btn_wrapper'>
                {tabList.map((tab) => (
                  <Tab key={tab.value}>
                    <button>{tab.label}</button>
                  </Tab>
                ))}
              </div>
            </TabList>

            <Spin spinning={loading}>
              <div className='row tabs-row'>
                {projects.length > 0 ? (
                  projects.map((project) => (
                    <div key={project.uuid} className='col-md-12'>
                      <ProjectCard
                        {...project}
                        to={routeTo(routesName.ADMIN_PROJECT_DETAILS, { id: String(project.uuid) })}
                      />
                    </div>
                  ))
                ) : (
                  <Empty />
                )}
                {totalPages > 0 && projects.length > 0 && (
                  <Pagination
                    totalPages={totalPages}
                    activePage={filter.page}
                    onChangePage={(page) => handleChangeFilter("page", page)}
                  />
                )}
              </div>
            </Spin>
          </Tabs>
        </div>
      </div>
    </ProjectItemsStyleWrapper>
  )
}

export default ProjectItems
