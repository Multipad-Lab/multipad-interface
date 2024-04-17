import { Fragment } from "react"
import GlobalStyles from "src/assets/styles/GlobalStyles"
import Layout from "src/components/layout"
import Header from "src/sections/Header/v2"
import PageHeader from "src/sections/ProjectPages/ProjectCalendar/PageHeader"
import ProjectCalendar from "src/sections/ProjectPages/ProjectCalendar"
import Footer from "src/sections/Footer/v1"

export default function ProjectsCalendarPage() {
  return (
    <Fragment>
      <Layout>
        <GlobalStyles />
        <Header />
        <PageHeader currentPage='CALENDAR VIEW' pageTitle='IGO CALENDAR' />
        <ProjectCalendar />
        <Footer />
      </Layout>
    </Fragment>
  )
}
