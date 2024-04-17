import Countdown, { zeroPad } from "react-countdown"
import { Slider, SliderItem } from "src/components/slider/Slider"
import ProgressBar from "src/components/progressBar"
import CardHover from "src/components/cardHover"
import LiveProjectStyleWrapper from "./LiveProject.style"
import { formatEther } from "viem"
import ImgProfile from "src/components/image/Image"
import { blockchainList } from "src/const/project-list"
import { divide } from "lodash"
import { convertFixed2Amount, tokenUSDRate } from "src/utils/commons"
import { useNavigate } from "react-router-dom"
import { routeTo } from "src/utils/services/routes"
import { routesName } from "src/const/routes"
import { UserLaunchpadFormType } from "src/types/userLaunchpadList"

const LiveProject = ({ launchpads, onRefresh }: { launchpads: UserLaunchpadFormType[]; onRefresh?: () => void }) => {
  const navigate = useNavigate()

  const sliderSettings = {
    dots: true,
    arrows: false,
    autoplay: true,
    speed: 1800,
    autoplaySpeed: 3500,
    cssEase: "ease-in-out",
    centerMode: true,
    centerPadding: "0px",
    infinite: launchpads.length > 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false
  }

  const CountdownRender = ({ days, hours, minutes, seconds }: any) => {
    return (
      <div className='countdown_wrapper'>
        <div>
          {zeroPad(days)}
          <span>D</span>
        </div>
        <div>
          {zeroPad(hours)}
          <span>H</span>
        </div>
        <div>
          {zeroPad(minutes)}
          <span>M</span>
        </div>
        <div>
          {zeroPad(seconds)}
          <span>S</span>
        </div>
      </div>
    )
  }

  return (
    <LiveProjectStyleWrapper className='live_project_wrapper'>
      <div className='container'>
        <Slider {...sliderSettings}>
          {launchpads?.map((item, i) => {
            const totalRaised = formatEther(BigInt(item.totalCurrent))
            const hardCap = formatEther(BigInt(item.hardCap))
            const progress = Number(hardCap) > 0 ? divide(Number(totalRaised), Number(hardCap)) * 100 : 0

            const pricePerText = tokenUSDRate({
              hardCap: item.hardCap,
              totalSell: item.totalRaise,
              hardCapDecimal: +item.project.paymentDecimal,
              totalRaiseDecimal: +item.project.tokenDecimal,
              tokenSymbol: item.project.tokenSymbol,
              paymentSymbol: item.project.paymentSymbol
            })

            return (
              <SliderItem key={i}>
                <div
                  className='game-price-item'
                  onClick={() => {
                    navigate(routeTo(routesName.PROJECT_DETAILS, { id: String(item.project.uuid) }))
                  }}
                >
                  <div className='game-price-inner'>
                    <div className='total-price'>
                      <div className='price-inner d-flex mb-45 md-mb-20'>
                        <div className='image-icon'>
                          <div>
                            <ImgProfile width={86} height={86} path={item.project.logoUrl} alt='icon' />
                          </div>
                        </div>
                        <div className='price-details'>
                          <h3 className='mb-15'>
                            <span>{item.project.name}</span>
                          </h3>
                          <div className='dsc'>{pricePerText}</div>
                        </div>
                      </div>
                      <div className='all-raise'>
                        Total Raised {convertFixed2Amount(Number(totalRaised))} {item.project.tokenSymbol} (
                        {`${progress.toFixed(2)}0%`})
                      </div>
                    </div>
                    <div className='allocation-max text-center'>
                      <ImgProfile
                        path={blockchainList.find((chain) => chain.id === item.chain)?.icon || ""}
                        alt='icon'
                      />
                      {/* <div className='allocation'>Allocation: {item.allocation}</div> */}
                    </div>
                    <div className='targeted-raise'>
                      <div className='seles-end-text'>Sale End In</div>
                      <Countdown onComplete={onRefresh} date={item.endAt * 1000} renderer={CountdownRender} />
                      <div className='targeted-raise-amount'>
                        Targeted Raise {hardCap} {item.project.tokenSymbol}
                      </div>
                    </div>
                  </div>
                  <div className='progress-inner'>
                    <ProgressBar progress={`${progress.toFixed(2)}%`} />
                  </div>

                  {/* hover */}
                  <CardHover />
                </div>
              </SliderItem>
            )
          })}
        </Slider>
      </div>
    </LiveProjectStyleWrapper>
  )
}

export default LiveProject
