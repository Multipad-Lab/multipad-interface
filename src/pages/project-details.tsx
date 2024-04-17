import { Fragment } from "react"
import { useModal } from "src/utils/ModalContext"
import Layout from "src/components/layout"
import GlobalStyles from "src/assets/styles/GlobalStyles"
import WalletModal from "src/components/modal/walletModal/WalletModal"
import ShareModal from "src/components/modal/shareModal/ShareModal"
import Header from "src/sections/Header/v2"
import PageHeader from "src/sections/ProjectPages/ProjectDetails/v1/PageHeader"
import ProjectDetails from "src/sections/ProjectPages/ProjectDetails/v1"
import Footer from "src/sections/Footer/v1"

export default function ProjectsDetails() {
  const { walletModalvisibility, shareModalVisibility } = useModal()

  return (
    <Fragment>
      <Layout>
        <GlobalStyles />
        {walletModalvisibility && <WalletModal />}
        {shareModalVisibility && <ShareModal />}
        <Header />
        <PageHeader currentPage='PROJECT DETAILS ' />
        <ProjectDetails />
        <Footer />
      </Layout>
    </Fragment>
  )
}
