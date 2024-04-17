import { Fragment } from "react"
import { useModal } from "src/utils/ModalContext"
import GlobalStyles from "src/assets/styles/GlobalStyles"
import Layout from "src/components/layout"
import WalletModal from "src/components/modal/walletModal/WalletModal"
import Header from "src/sections/Header/v2"
import ProjectClassic from "src/sections/ProjectPages/ProjectClassic/v1"
import Footer from "src/sections/Footer/v1"

export default function ProjectClassicOne() {
  const { walletModalvisibility } = useModal()
  return (
    <Fragment>
      <Layout>
        <GlobalStyles />
        {walletModalvisibility && <WalletModal />}
        <Header />
        <ProjectClassic />
        <Footer />
      </Layout>
    </Fragment>
  )
}
