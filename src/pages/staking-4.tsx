import { Fragment } from "react"
import { useModal } from "src/utils/ModalContext"
import GlobalStyles from "src/assets/styles/GlobalStyles"
import Layout from "src/components/layout"
import WalletModal from "src/components/modal/walletModal/WalletModal"
import Header from "src/sections/Header/v2"
import PageHeader from "src/sections/StakingPages/v3/PageHeader"
import Staking from "src/sections/StakingPages/v4"
import Footer from "src/sections/Footer/v1"

export default function StakingFour() {
  const { walletModalvisibility } = useModal()
  return (
    <Fragment>
      <Layout>
        <GlobalStyles />
        {walletModalvisibility && <WalletModal />}
        <Header />
        <PageHeader currentPage='staking' pageTitle='STAKING v4' />
        <Staking />
        <Footer />
      </Layout>
    </Fragment>
  )
}
