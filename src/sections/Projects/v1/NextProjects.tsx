import { BiCalendar } from "react-icons/bi"
import { SectionTitle, SectionTitleWrapper } from "src/components/sectionTitle"
import Button from "src/components/button"
import ProjectCard from "./ProjectCard/ProjectCard"
import NextProjectsStyleWrapper from "./NextProjects.style"
import { Slider, SliderItem } from "src/components/slider/Slider"
import prevIcon from "src/assets/images/icons/prev-icon.svg"
import nextIcon from "src/assets/images/icons/next-icon.svg"
import { useProjectListData } from "src/hooks/project-list/useProjectListData"
import { ELaunchpadStatusString } from "src/types/userLaunchpadList"
import Empty from "src/components/Empty/Empty"
import { routesName } from "src/const/routes"

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

const NextProjects = () => {
  const { launchpads } = useProjectListData({ tab: ELaunchpadStatusString.UPCOMMING })

  const sliderSettings = {
    dots: false,
    arrows: true,
    speed: 1200,
    cssEase: "ease-in-out",
    centerPadding: "0px",
    infinite: launchpads.length > 1,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1076,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      }
    ]
  }

  return (
    <NextProjectsStyleWrapper>
      <div className='container'>
        <SectionTitleWrapper>
          <SectionTitle title='Upcoming IDO' subtitle='Next Projects' />

          <Button href={routesName.PROJECT_CALENDAR} variant='outline' className='button-calendar' sm>
            {" "}
            <BiCalendar />
            Calendar{" "}
          </Button>
        </SectionTitleWrapper>
        {/* <div className='row align-items-center single-project-row'> */}
        {launchpads?.length > 0 ? (
          <Slider {...sliderSettings}>
            {launchpads?.map((launchpad, i) => (
              <SliderItem key={i}>
                <div key={i} className='slider_item_wraper'>
                  <ProjectCard {...launchpad} />
                </div>
              </SliderItem>
            ))}
          </Slider>
        ) : (
          <Empty />
        )}
        {/* </div> */}
      </div>
    </NextProjectsStyleWrapper>
  )
}

export default NextProjects
