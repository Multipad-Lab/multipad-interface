import { Fragment } from "react"
import { useModal } from "src/utils/ModalContext"
import GlobalStyles from "src/assets/styles/GlobalStyles"
import Layout from "src/components/layout"
import WalletModal from "src/components/modal/walletModal/WalletModal"
import Banner from "src/sections/Banner/v2"
import Header from "src/sections/Header/v1"
import Count from "src/sections/Count/v2"
import ExploreProjects from "src/sections/Projects/v4"
import Features from "src/sections/Features/v1"
import Allocations from "src/sections/Allocations/v1"
import Statistics from "src/sections/Statistics/v2"
import Integration from "src/sections/Integration/v1"
import RoadMap from "src/sections/RoadMap/v1"
import Team from "src/sections/Team/v1"
import Mentor from "src/sections/Mentor/v1"
import Partner from "src/sections/Partner/v1"
import Faq from "src/sections/Faq/v1"
import Footer from "src/sections/Footer/v2"

export default function HomeTwo() {
  const { walletModalvisibility } = useModal()
  return (
    <Fragment>
      <Layout>
        <GlobalStyles />
        {walletModalvisibility && <WalletModal />}
        <Header />
        <Banner />
        <Count />
        <ExploreProjects />
        <Features />
        <Allocations />
        <Statistics />
        <Integration />
        <RoadMap />
        <Team />
        <Mentor />
        <Partner />
        <Faq />
        <Footer />
      </Layout>
    </Fragment>
  )
}
