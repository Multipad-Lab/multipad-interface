import { Fragment } from "react"
import { useModal } from "src/utils/ModalContext"
import Layout from "src/components/layout"
import GlobalStyles from "src/assets/styles/GlobalStyles"
import WalletModal from "src/components/modal/walletModal/WalletModal"
import Header from "src/sections/Header/v2"
import PageHeader from "src/sections/IGOApplyPage/PageHeader"
import IGOApply from "src/sections/IGOApplyPage"
import Footer from "src/sections/Footer/v1"

export default function IGOApplypage() {
  const { walletModalvisibility } = useModal()
  return (
    <Fragment>
      <Layout>
        <GlobalStyles />
        {walletModalvisibility && <WalletModal />}
        <Header />
        <PageHeader pageTitle='APPLY FOR IGO' />
        <IGOApply />
        <Footer />
      </Layout>
    </Fragment>
  )
}
