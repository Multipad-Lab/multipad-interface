import { Fragment } from "react"
import Layout from "src/components/layout"
import GlobalStyles from "src/assets/styles/GlobalStyles"
import Header from "src/sections/Header/v2"
import PageHeader from "src/sections/IGOApplyPage/PageHeader"
import Footer from "src/sections/Footer/v1"
import LaunchpadForm from "src/sections/AdminProjects/LaucnpadForm/LaunchpadForm"

export default function AdminProjectDetailsLaunchpad() {
  return (
    <Fragment>
      <Layout>
        <GlobalStyles />
        <Header />
        <PageHeader pageTitle='LAUNCHPAD MANAGEMENT' />
        <LaunchpadForm />
        <Footer />
      </Layout>
    </Fragment>
  )
}
