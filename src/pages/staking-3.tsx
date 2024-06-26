import { Fragment } from "react"
import { useModal } from "src/utils/ModalContext"
import Layout from "src/components/layout"
import GlobalStyles from "src/assets/styles/GlobalStyles"
import WalletModal from "src/components/modal/walletModal/WalletModal"
import Header from "src/sections/Header/v2"
import PageHeader from "src/sections/StakingPages/v3/PageHeader"
import Staking from "src/sections/StakingPages/v3"
import Footer from "src/sections/Footer/v1"

export default function StakingThree() {
  const { walletModalvisibility } = useModal()
  return (
    <Fragment>
      <Layout>
        <GlobalStyles />
        {walletModalvisibility && <WalletModal />}
        <Header />
        <PageHeader currentPage='staking' pageTitle='STAKING v3' />
        <Staking />
        <Footer />
      </Layout>
    </Fragment>
  )
}
