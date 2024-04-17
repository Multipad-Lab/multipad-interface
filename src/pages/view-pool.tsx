import { Fragment } from "react"
import Layout from "src/components/layout"
import GlobalStyles from "src/assets/styles/GlobalStyles"
import Header from "src/sections/Header/v2"
import PageHeader from "src/sections/ProjectPages/ProjectDetails/v1/PageHeader"
import Footer from "src/sections/Footer/v1"
import ConfirmViewPollModal from "src/components/modal/confirmViewPollModal/ConfirmViewPollModal"
import { routesName } from "src/const/routes"
import ViewPoolDetails from "src/sections/ViewPool/ViewPoolDetails"
import { routeTo } from "src/utils/services/routes"
import { useModalConfirm } from "src/hooks/view-pool/useModalConfirm"
import { useParams } from "react-router-dom"

const ViewPool = () => {
  const { id } = useParams()
  const { confirmViewPool, handleBackToProjectDetail, handleShowPool } = useModalConfirm()

  return (
    <Fragment>
      <Layout>
        <GlobalStyles />
        {confirmViewPool && <ConfirmViewPollModal onClose={handleBackToProjectDetail} onOk={handleShowPool} />}
        <Header />
        <PageHeader currentPage='VIEW POOL' projectDetailslUrl={routeTo(routesName.PROJECT_DETAILS, { id })} />
        {!confirmViewPool && <ViewPoolDetails />}
        <Footer />
      </Layout>
    </Fragment>
  )
}

export default ViewPool
