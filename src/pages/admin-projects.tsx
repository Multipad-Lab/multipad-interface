import { Fragment } from "react"
import GlobalStyles from "src/assets/styles/GlobalStyles"
import Layout from "src/components/layout"
import Header from "src/sections/Header/v2"
import Footer from "src/sections/Footer/v1"
import { useProjectListSearch } from "src/hooks/project-list/useProjectListSearch"
import { AdminProjectListContextProviver } from "src/utils/AdminProjectListProvider"
import PageHeader from "src/sections/AdminProjects/PageHeader"
import ProjectsList from "src/sections/AdminProjects/ProjectsList"

export default function AdminProjectsPage() {
  const { searchText, handleChangeSearchText } = useProjectListSearch()

  return (
    <Fragment>
      <GlobalStyles />
      <Layout>
        <Header />
        <AdminProjectListContextProviver value={{ handleChangeSearchText, searchText }}>
          <PageHeader currentPage='ADMIN' pageTitle='PROJECTS' />

          <ProjectsList />
        </AdminProjectListContextProviver>
        <Footer />
      </Layout>
    </Fragment>
  )
}
