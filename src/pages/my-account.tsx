import { Fragment } from "react"
import { useModal } from "src/utils/ModalContext"
import Layout from "src/components/layout"
import GlobalStyles from "src/assets/styles/GlobalStyles"
import WalletModal from "src/components/modal/walletModal/WalletModal"
import Header from "src/sections/Header/v2"
import Footer from "src/sections/Footer/v1"
import BuyMlpModal from "src/components/modal/buyMlpModal/BuyMlpModal"
import PageHeader from "src/sections/StakingPages/v3/PageHeader"
import MyAccount from "src/sections/MyAccount/MyAccount"

export default function myAccount() {
  const { walletModalvisibility, buyMlpModal } = useModal()

  return (
    <Fragment>
      <Layout>
        <GlobalStyles />
        {walletModalvisibility && <WalletModal />}
        {buyMlpModal && <BuyMlpModal />}
        <Header />
        <PageHeader isMyAccountPage currentPage='My Account' pageTitle='My Account' />
        <MyAccount />
        <Footer showCTA={false} />
      </Layout>
    </Fragment>
  )
}
