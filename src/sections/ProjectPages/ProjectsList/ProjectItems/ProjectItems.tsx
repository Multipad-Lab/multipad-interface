import { Tab, Tabs, TabList } from "react-tabs"
import nextArrowIcon from "src/assets/images/icons/next-arrow.png"
import ProjectCard from "../ProjectCard/ProjectCard"
import ProjectItemsStyleWrapper from "./ProjectItems.style"
import { routeTo } from "src/utils/services/routes"
import { routesName } from "src/const/routes"
import Pagination from "src/components/pagination/Pagination"
import Spin from "src/components/Spin/Spin"
import { useProjectListData } from "src/hooks/project-list/useProjectListData"
import { accessListUser, blockchainList, tabList } from "src/const/project-list"
import Empty from "src/components/Empty/Empty"

const ProjectItems = () => {
  const { launchpads, totalPages, loading, filter, handleChangeTab, handleChangeFilter } = useProjectListData()

  return (
    <ProjectItemsStyleWrapper>
      <div className='container'>
        <div className='row'>
          <ul className='menu-list'>
            <li>Project name</li>
            <li>Chain</li>
            <li>Launched</li>
            <li>Type</li>
            <li>Total Raise</li>
            <li>Progress</li>
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
              <div className='item_sorting_list'>
                <button className='access-button'>
                  {accessListUser.find((access) => access.value === filter.type)?.title || "All access"}
                  <img src={nextArrowIcon} alt='icon' />
                  <ul className='sub-menu'>
                    {accessListUser.map((access) => (
                      <li onClick={() => handleChangeFilter("type", access.value)}>{access.title}</li>
                    ))}
                  </ul>
                </button>
                <button className='chain-button'>
                  {"All Block Chain"}
                  <img src={nextArrowIcon} alt='icon' />
                  <ul className='sub-menu'>
                    {blockchainList.map((chain) => (
                      <li>
                        <img src={chain.icon} alt='icon' /> {chain.name}
                      </li>
                    ))}
                  </ul>
                </button>
              </div>
            </TabList>

            <Spin spinning={loading}>
              <div className='row tabs-row'>
                {launchpads.length > 0 ? (
                  launchpads.map((launchpad) => (
                    <div key={launchpad.uuid} className='col-md-12'>
                      <ProjectCard
                        launchpad={launchpad}
                        to={routeTo(routesName.PROJECT_DETAILS, { id: String(launchpad.project.uuid) })}
                      />
                    </div>
                  ))
                ) : (
                  <div className='empty'>
                    <Empty />
                  </div>
                )}
                {totalPages > 0 && launchpads.length > 0 && (
                  <Pagination
                    totalPages={totalPages}
                    activePage={filter.page || 1}
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
