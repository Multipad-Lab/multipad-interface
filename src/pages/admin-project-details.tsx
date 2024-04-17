import { Fragment } from "react"
import Layout from "src/components/layout"
import GlobalStyles from "src/assets/styles/GlobalStyles"
import Header from "src/sections/Header/v2"
import PageHeader from "src/sections/IGOApplyPage/PageHeader"
import Footer from "src/sections/Footer/v1"
import ProjectForm from "src/sections/AdminProjects/ProjectForm/ProjectForm"

export default function AdminProjectDetails() {
  return (
    <Fragment>
      <Layout>
        <GlobalStyles />
        <Header />
        <PageHeader pageTitle='DETAIL PROJECT' />
        <ProjectForm />
        <Footer />
      </Layout>
    </Fragment>
  )
}
