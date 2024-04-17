import { Fragment } from "react"
import GlobalStyles from "src/assets/styles/GlobalStyles"
import Layout from "src/components/layout"
import Banner from "src/sections/Banner/v1"
import Header from "src/sections/Header/v1"
import About from "src/sections/About/v1"
import NextProjects from "src/sections/Projects/v1"
import Statistics from "src/sections/Statistics/v1"
import Team from "src/sections/Team/v1"
import Partner from "src/sections/Partner/v1"
import Footer from "src/sections/Footer/v1"
import WhatTheOffer from "src/sections/Offer/Offer"

export default function HomeOne() {
  return (
    <Fragment>
      <Layout>
        <GlobalStyles />
        <Header />
        <Banner />
        <About />
        <NextProjects />
        <WhatTheOffer />
        <Statistics />
        <Team />
        <Partner />
        <Footer />
      </Layout>
    </Fragment>
  )
}
