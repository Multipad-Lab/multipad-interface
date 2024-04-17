import { Fragment } from "react"
import { useModal } from "src/utils/ModalContext"
import Layout from "src/components/layout"
import GlobalStyles from "src/assets/styles/GlobalStyles"
import WalletModal from "src/components/modal/walletModal/WalletModal"
import Header from "src/sections/Header/v2"
import PageHeader from "src/sections/KYCPages/v2/PageHeader"
import Kyc from "src/sections/KYCPages/v2"
import Footer from "src/sections/Footer/v1"

export default function KycPageTwo() {
  const { walletModalvisibility } = useModal()

  return (
    <Fragment>
      <Layout>
        <GlobalStyles />
        {walletModalvisibility && <WalletModal />}
        <Header />
        <PageHeader currentPage='KYC' pageTitle='KYC PROCESS' />
        <Kyc />
        <Footer />
      </Layout>
    </Fragment>
  )
}
