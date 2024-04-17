import { Fragment } from "react"
import { useModal } from "src/utils/ModalContext"
import GlobalStyles from "src/assets/styles/GlobalStyles"
import Layout from "src/components/layout"
import WalletModal from "src/components/modal/walletModal/WalletModal"
import Header from "src/sections/Header/v2"
import Login from "src/sections/AuthPages/Login"
import Footer from "src/sections/Footer/v1"

export default function LoginPage() {
  const { walletModalvisibility } = useModal()
  return (
    <Fragment>
      <Layout>
        <GlobalStyles />
        {walletModalvisibility && <WalletModal />}
        <Header />
        <Login />
        <Footer />
      </Layout>
    </Fragment>
  )
}
