import { Fragment } from "react"
import Layout from "src/components/layout"
import GlobalStyles from "src/assets/styles/GlobalStyles"
import Header from "src/sections/Header/v2"
import PageHeader from "src/sections/IGOApplyPage/PageHeader"
import Footer from "src/sections/Footer/v1"
import ProjectCreateForm from "src/sections/AdminProjects/ProjectCreateForm/ProjectCreateForm"

export default function AdminProjectCreate() {
  return (
    <Fragment>
      <Layout>
        <GlobalStyles />
        <Header />
        <PageHeader pageTitle='CREATE PROJECT' />
        <ProjectCreateForm />
        <Footer />
      </Layout>
    </Fragment>
  )
}
