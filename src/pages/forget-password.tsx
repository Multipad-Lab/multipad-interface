import { Fragment } from "react"
import { useModal } from "src/utils/ModalContext"
import GlobalStyles from "src/assets/styles/GlobalStyles"
import Layout from "src/components/layout"
import WalletModal from "src/components/modal/walletModal/WalletModal"
import Header from "src/sections/Header/v2"
import ForgetPassword from "src/sections/AuthPages/ForgetPassword"
import Footer from "src/sections/Footer/v1"

export default function PasswordReset() {
  const { walletModalvisibility } = useModal()
  return (
    <Fragment>
      <GlobalStyles />
      <Layout>
        {walletModalvisibility && <WalletModal />}
        <Header />
        <ForgetPassword />
        <Footer />
      </Layout>
    </Fragment>
  )
}
