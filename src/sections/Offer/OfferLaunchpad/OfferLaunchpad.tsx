import { Link } from "react-router-dom"
import OfferLaunchpadStyleWrapper from "./OfferLaunchpad.style"
import CardHover from "src/components/cardHover/CardHover"
import redirectIcon from "src/assets/images/icons/redirect-icon.svg"
import laucnpadImage from "src/assets/images/offer/launchpad.png"
import { routesName } from "src/const/routes"

const OfferLaunchpad = () => {
  return (
    <OfferLaunchpadStyleWrapper>
      <h4 className='mb-8'>Launchpad</h4>
      <div className='dsc'>Being The Innovative Decentralized IDO Platform Across All Main Blockchain Networks.</div>
      <h6>
        <Link to={routesName.PROJECTS}>
          Get Started <img src={redirectIcon} alt='redirect-icon' />
        </Link>
      </h6>

      <div className='offter_launchpad_image'>
        <img src={laucnpadImage} alt='offter launchpad' />
      </div>
      <CardHover />
    </OfferLaunchpadStyleWrapper>
  )
}

export default OfferLaunchpad
