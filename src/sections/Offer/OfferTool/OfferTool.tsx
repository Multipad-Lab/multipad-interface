import { Link } from "react-router-dom"
import OfferToolStyleWrapper from "./OfferTool.style"
import CardHover from "src/components/cardHover/CardHover"
import redirectIcon from "src/assets/images/icons/redirect-icon.svg"
import toolImage from "src/assets/images/offer/tool.png"

const OfferTool = () => {
  return (
    <OfferToolStyleWrapper>
      <h4 className='team-title mb-8'>Tool</h4>
      <div className='dsc'>Your All-in-One Solution For Mastering The Dynamic DeFi Landscape.</div>
      <h6>
        <Link to='/'>
          Get Started <img src={redirectIcon} alt='redirect-icon' />
        </Link>
      </h6>
      <div className='offter_tool_image'>
        <img src={toolImage} alt='offter tool' />
      </div>
      <CardHover />
    </OfferToolStyleWrapper>
  )
}

export default OfferTool
