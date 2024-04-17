import CardHover from "src/components/cardHover"
import ProjectCardStyleWrapper from "./ProjectCard.style"
import { UserLaunchpadFormType, UserProjectFormType } from "src/types/userLaunchpadList"
import ImgProfile from "src/components/image/Image"
import { socialLinks } from "src/const/view-pool"
import { accessListUser, blockchainList } from "src/const/project-list"
import { formatEther } from "viem"
import { Link, useNavigate } from "react-router-dom"
import { routeTo } from "src/utils/services/routes"
import { routesName } from "src/const/routes"
import { LaunchpadType } from "src/types/viiewPool"
import Countdown, { zeroPad } from "react-countdown"
import dayjs from "dayjs"
import { tokenUSDRate } from "src/utils/commons"

const ProjectCard = (item: UserLaunchpadFormType) => {
  const navigate = useNavigate()
  const CountdownRender = ({ days, hours, minutes, seconds }: any) => {
    const format = `${days}D ${zeroPad(hours)}H ${zeroPad(minutes)}M ${zeroPad(seconds)}S`
    return <span>{format}</span>
  }

  const pricePerText = tokenUSDRate({
    hardCap: item.hardCap,
    totalSell: item.totalRaise,
    hardCapDecimal: +item.project.paymentDecimal,
    totalRaiseDecimal: +item.project.tokenDecimal,
    tokenSymbol: item.project.tokenSymbol,
    paymentSymbol: item.project.paymentSymbol
  })

  return (
    <ProjectCardStyleWrapper>
      <div
        onClick={() => {
          navigate(routeTo(routesName.PROJECT_DETAILS, { id: String(item.project.uuid) }))
        }}
      >
        <div className='project-info d-flex'>
          <div>
            <ImgProfile width={70} height={70} path={item.project.logoUrl} alt='icon' />
          </div>
          <div className='project-auother'>
            <h4 className='mb-10'>
              <span>{item.project.name}</span>
            </h4>
            <div className='dsc'>{pricePerText}</div>
          </div>
        </div>
        <div className='project-content'>
          <div className='project-header d-flex justify-content-between align-items-center'>
            <div className='heading-title'>
              <Countdown date={dayjs(item.startAt * 1000).valueOf()} renderer={CountdownRender} />
            </div>
            <div className='project-icon'>
              <ImgProfile path={blockchainList.find((chain) => chain.id === item.chain)?.icon || ""} alt='icon' />
            </div>
          </div>
          <ul className='project-listing'>
            {item.type !== LaunchpadType.GUARANTEED && (
              <>
                <li>
                  Min Buy{" "}
                  <span>
                    {formatEther(BigInt(item.minBuy))} {item.project.paymentSymbol}
                  </span>
                </li>
                <li>
                  Max Buy{" "}
                  <span>
                    {formatEther(BigInt(item.maxBuy))} {item.project.paymentSymbol}
                  </span>
                </li>
              </>
            )}
            <li>
              Targeted raise{" "}
              <span>
                {formatEther(BigInt(item.hardCap))} {item.project.paymentSymbol}
              </span>
            </li>
            <li>
              Access type <span>{accessListUser.find((i) => i.value === item.type)?.title}</span>
            </li>
          </ul>
          <div className='social-share'>
            <span className='social-text'>Social</span>

            <div className='social-links'>
              {socialLinks?.map((link) => (
                <Link
                  key={link.field}
                  to={item ? (item.project[link.field as keyof UserProjectFormType] as string) || "#" : "#"}
                  target='_blank'
                  onClick={(e) => e.stopPropagation()}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <CardHover />
      </div>
    </ProjectCardStyleWrapper>
  )
}

export default ProjectCard
