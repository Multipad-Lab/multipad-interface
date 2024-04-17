import { SectionTitle } from "src/components/sectionTitle"
import OfferStyleWrapper from "./Offer.style"
import OfferLaunchpad from "./OfferLaunchpad/OfferLaunchpad"
import OfferTool from "./OfferTool/OfferTool"
import OfferFarm from "./OfferFarm/OfferFarm"
import OfferDexAggregator from "./OfferDexAggregator/OfferDexAggregator"

const WhatTheOffer = () => {
  return (
    <OfferStyleWrapper>
      <SectionTitle isCenter={true} title='A Full-Stack DEFI' subtitle='WHAT WE OFFER' />
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 col-md-12 offer_launchpad_wrapper'>
            <OfferLaunchpad />
          </div>
          <div className='col-lg-8 col-md-12'>
            <div className='d-flex w-100 offer_tool_farm'>
              <div className='offer_tool'>
                <OfferTool />
              </div>
              <div className='offer_farm'>
                <OfferFarm />
              </div>
            </div>

            <OfferDexAggregator />
          </div>
        </div>
      </div>
    </OfferStyleWrapper>
  )
}

export default WhatTheOffer
