import Button from "src/components/button"
import BannerStyleWrapper from "./Banner.style"

import logoIcon from "src/assets/images/logo-icon.svg"
import { routesName } from "src/const/routes"

const Banner = () => {
  return (
    <>
      <BannerStyleWrapper>
        <div className='container'>
          <div className='banner-content text-center'>
            <img src={logoIcon} className='banner-icon' alt='banner icon' />
            <h1 className='banner-title'>Metaverse Web 3.0 Gaming Launchpad &amp; IDO</h1>
            <div className='description'>Multi-chain Launchpad with the most modern and secure tools</div>
            <Button href={routesName.PROJECTS} variant='mint' md isCenter className='banner-btn'>
              Explore IDO
            </Button>
          </div>
        </div>
      </BannerStyleWrapper>
    </>
  )
}

export default Banner
