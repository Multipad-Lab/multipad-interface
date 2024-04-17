import { Fragment } from "react"
import { useModal } from "src/utils/ModalContext"
import GlobalStyles from "src/assets/styles/GlobalStyles"
import Layout from "src/components/layout"
import WalletModal from "src/components/modal/walletModal/WalletModal"
import Header from "src/sections/Header/v2"
import PageHeader from "src/sections/FarmingPage/PageHeader"
import Farming from "src/sections/FarmingPage"
import Footer from "src/sections/Footer/v1"
import BuyMlpModal from "src/components/modal/buyMlpModal/BuyMlpModal"
import FarmCalculationModal from "src/components/modal/farmCalculationModal/farmCalculationModal"

export default function FarmingPage() {
  const { walletModalvisibility, buyMlpModal, farmCalculationModal } = useModal()

  return (
    <Fragment>
      <Layout>
        <GlobalStyles />
        {walletModalvisibility && <WalletModal />}
        {buyMlpModal && <BuyMlpModal />}
        {farmCalculationModal && <FarmCalculationModal />}
        <Header />
        <PageHeader currentPage='Farm' pageTitle='Farming' />
        <Farming />
        <Footer />
      </Layout>
    </Fragment>
  )
}
