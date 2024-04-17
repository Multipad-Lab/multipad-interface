import { Link } from "react-router-dom"
import OfferFarmStyleWrapper from "./OfferFarm.style"
import CardHover from "src/components/cardHover/CardHover"
import redirectIcon from "src/assets/images/icons/redirect-icon.svg"
import farmImage from "src/assets/images/offer/farm.png"
import { routesName } from "src/const/routes"

const OfferFarm = () => {
  return (
    <OfferFarmStyleWrapper>
      <h4 className='team-title mb-8'>Staking</h4>
      <div className='dsc'>Experience Staking to generate passive income with an APR of up to 17%.</div>
      <h6>
        <Link to={routesName.STAKING}>
          Get Started <img src={redirectIcon} alt='redirect-icon' />
        </Link>
      </h6>

      <div className='offter_farm_image'>
        <img src={farmImage} alt='offter farm' />
      </div>
      <CardHover />
    </OfferFarmStyleWrapper>
  )
}

export default OfferFarm
