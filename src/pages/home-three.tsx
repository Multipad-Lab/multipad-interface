import { Fragment } from "react"
import { useModal } from "src/utils/ModalContext"
import GlobalStyles from "src/assets/styles/GlobalStyles"
import Layout from "src/components/layout"
import WalletModal from "src/components/modal/walletModal/WalletModal"
import Header from "src/sections/Header/v1"
import Banner from "src/sections/Banner/v3"
import Token from "src/sections/Token/v1"
import ExploreProjects from "src/sections/Projects/v5"
import Tutorial from "src/sections/Tutorial/v2"
import Features from "src/sections/Features/v2"
import Partner from "src/sections/Partner/v2"
import Faq from "src/sections/Faq/v2"
import Footer from "src/sections/Footer/v1"

export default function HomeThree() {
  const { walletModalvisibility } = useModal()
  return (
    <Fragment>
      <Layout>
        <GlobalStyles />
        {walletModalvisibility && <WalletModal />}
        <Header />
        <Banner />
        <Token />
        <ExploreProjects />
        <Tutorial />
        <Features />
        <Partner />
        <Faq />
        <Footer />
      </Layout>
    </Fragment>
  )
}
