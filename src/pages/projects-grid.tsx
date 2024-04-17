import { Fragment } from "react"
import { useModal } from "src/utils/ModalContext"
import GlobalStyles from "src/assets/styles/GlobalStyles"
import Layout from "src/components/layout"
import WalletModal from "src/components/modal/walletModal/WalletModal"
import Header from "src/sections/Header/v2"
import PageHeader from "src/sections/ProjectPages/ProjectsList/PageHeader"
import ProjectsGrid from "src/sections/ProjectPages/ProjectsGrid"
import Footer from "src/sections/Footer/v1"

export default function ProjectGridPage() {
  const { walletModalvisibility } = useModal()
  return (
    <Fragment>
      <GlobalStyles />
      <Layout>
        {walletModalvisibility && <WalletModal />}
        <Header />
        <PageHeader currentPage='PROJECTS' pageTitle='EXPLORE IGOS' />
        <ProjectsGrid />
        <Footer />
      </Layout>
    </Fragment>
  )
}
