import Button from "src/components/button"
import SliderStyleWrapper from "./Slider.style"
import prevIcon from "src/assets/images/icons/prev-icon.svg"
import nextIcon from "src/assets/images/icons/next-icon.svg"
import { Slider } from "src/components/slider/Slider"
import { useParams } from "react-router-dom"
import { routeTo } from "src/utils/services/routes"
import { routesName } from "src/const/routes"
import { AdminProjectResponseType } from "src/types/adminProjectList"
import ImgProfile from "src/components/image/Image"
import Banner1 from "src/assets/images/banner1.png"

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props
  return (
    <div className={className} style={style} onClick={onClick}>
      <img src={prevIcon} alt='prev-icon' />
    </div>
  )
}

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props
  return (
    <div className={className} style={style} onClick={onClick}>
      <img src={nextIcon} alt='next-icon' />
    </div>
  )
}

const ProjectDetailsSlider = ({ projectData }: { projectData?: AdminProjectResponseType }) => {
  const { id } = useParams()
  const images = projectData?.images || []

  const sliderSettings = {
    customPaging: function (index: number) {
      return (
        <a className='slider-thumb'>
          <ImgProfile path={images[index]} loadError={Banner1} />
          <div></div>
        </a>
      )
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: images.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  }

  return (
    <SliderStyleWrapper>
      <div className='row'>
        <div className='col-lg-8'>
          <div className='slider-container'>
            {images.length > 0 ? (
              <Slider {...sliderSettings}>
                {images.map((image, index) => (
                  <div key={index}>
                    <ImgProfile path={image} loadError={Banner1} />
                  </div>
                ))}
              </Slider>
            ) : (
              <div>
                <ImgProfile path={Banner1} />
              </div>
            )}
          </div>
        </div>

        <div className='col-lg-4 '>
          <div className='token-sale'>
            <div className='token-sale-main'>
              <div className='token-sale-main__header'>
                <div className='header-left'>
                  <div className='fundraise-goal'>Fundraise Goal</div>
                  <div className='tba'>TBA</div>
                </div>

                {/* <div className='header-right'>
                  <Button
                    sm
                    variant='dark'
                    href='https://docs.google.com/forms/d/1mYRmvHN-Btfuavz15mqK4x88z9jGGcgamaakAysbdBQ/viewform?edit_requested=true'
                    target='_blank'
                  >
                    Apply Now
                  </Button>
                </div> */}
              </div>

              <div className='description'>
                <div>{projectData?.description || ""}</div>
              </div>

              <Button href={routeTo(routesName.VIEWPOOL, { id })} className='btn-view-pool' variant='mint' sm>
                View Pool
              </Button>
            </div>

            <div className='token-sale-footer'>Token Sale</div>
          </div>
        </div>
      </div>
    </SliderStyleWrapper>
  )
}

export default ProjectDetailsSlider
