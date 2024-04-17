import { Fragment, useState } from "react"
import { useModal } from "src/utils/ModalContext"
import Layout from "src/components/layout"
import GlobalStyles from "src/assets/styles/GlobalStyles"
import WalletModal from "src/components/modal/walletModal/WalletModal"
import Header from "src/sections/Header/v2"
import PageHeader from "src/sections/StakingPages/v3/PageHeader"
import StakingV3 from "src/sections/StakingPages/v3"
import Footer from "src/sections/Footer/v1"
import BuyMlpModal from "src/components/modal/buyMlpModal/BuyMlpModal"

export default function Staking() {
  const { walletModalvisibility, buyMlpModal } = useModal()
  const [isRefetch, setIsRefetch] = useState(false)

  const handleRefetch = (value: boolean) => {
    setIsRefetch(value)
  }

  return (
    <Fragment>
      <Layout>
        <GlobalStyles />
        {walletModalvisibility && <WalletModal />}
        {buyMlpModal && <BuyMlpModal />}
        <Header />
        <PageHeader currentPage='staking' pageTitle='STAKING' isRefetch={isRefetch} handleRefetch={handleRefetch} />
        <StakingV3 handleRefetch={handleRefetch} />
        <Footer />
      </Layout>
    </Fragment>
  )
}
