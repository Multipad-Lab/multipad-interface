import { Link } from "react-router-dom"
import OfferDexAggregatorStyleWrapper from "./OfferDexAggregator.style"
import CardHover from "src/components/cardHover/CardHover"
import redirectIcon from "src/assets/images/icons/redirect-icon.svg"
import dexAggregatoImage from "src/assets/images/offer/dex-aggregator.png"

const OfferDexAggregator = () => {
  return (
    <OfferDexAggregatorStyleWrapper>
      <div className='offer_dexAggregator_dsc'>
        <h4 className='team-title mb-8'>Dex Aggregator</h4>
        <div className='dsc'>Help You Find The Best Rates And Manage Trades Efficiently.</div>
        <h6>
          <Link to='/'>
            Get Started <img src={redirectIcon} alt='redirect-icon' />
          </Link>
        </h6>
      </div>
      <div className='offer_dexAggregator_image'>
        <img src={dexAggregatoImage} alt='offter dex aggregato' />
      </div>
      <CardHover />
    </OfferDexAggregatorStyleWrapper>
  )
}

export default OfferDexAggregator
