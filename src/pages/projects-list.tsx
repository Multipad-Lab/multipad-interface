import { Fragment } from "react"
import GlobalStyles from "src/assets/styles/GlobalStyles"
import Layout from "src/components/layout"
import Header from "src/sections/Header/v2"
import PageHeader from "src/sections/ProjectPages/ProjectsList/PageHeader"
import ProjectsList from "src/sections/ProjectPages/ProjectsList"
import Footer from "src/sections/Footer/v1"
import { ProjectListContextProviver } from "src/utils/ProjectListProvider"
import { useProjectListSearch } from "src/hooks/project-list/useProjectListSearch"

export default function ProjectListPage() {
  const { searchText, handleChangeSearchText } = useProjectListSearch()

  return (
    <Fragment>
      <GlobalStyles />
      <Layout>
        <Header />
        <ProjectListContextProviver value={{ handleChangeSearchText, searchText }}>
          <PageHeader currentPage='PROJECTS' pageTitle='EXPLORE IDOS' />
          <ProjectsList />
        </ProjectListContextProviver>
        <Footer />
      </Layout>
    </Fragment>
  )
}
