import ProgressBar from "src/components/progressBar"
import CardHover from "src/components/cardHover"
import ProjectCardStyleWrapper from "./ProjectCard.style"
import { Link } from "react-router-dom"
import { Fragment, useEffect, useState } from "react"
import dayjs from "dayjs"
import { convertNumberToDaysFormat, tokenUSDRate } from "src/utils/commons"
import Countdown, { zeroPad } from "react-countdown"
import { ELaunchpadStatusString, UserLaunchpadFormType } from "src/types/userLaunchpadList"
import { formatEther } from "viem"
import { divide } from "lodash"
import { fromUnixTime } from "date-fns"
import projectThumb1 from "src/assets/images/project/privius-image.png"
import { blockchainList } from "src/const/project-list"
import Skeleton from "src/components/Skeleton/Skeleton"
import ImgProfile from "src/components/image/Image"
import { LaunchpadName } from "src/types/viiewPool"

type Props = {
  launchpad: UserLaunchpadFormType
  to?: string
}

const ProjectCard = ({ launchpad, to }: Props) => {
  const [countDown, setCountDown] = useState<number | undefined>()
  const [progress, setProgress] = useState("0%")
  const [launchpadStatus, setLaunchpadStatus] = useState<ELaunchpadStatusString>(ELaunchpadStatusString.OPEN)
  const [timeCountDown, setTimeCountDown] = useState<any>()
  useEffect(() => {
    const progress = (divide(Number(launchpad.totalCurrent), Number(launchpad.hardCap)) * 100).toFixed(1)
    setProgress(`${isNaN(Number(progress)) ? "0" : progress}%`)
    handleLaunchpadStatus()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [launchpad])

  const handleLaunchpadStatus = () => {
    const rangeTimeEnd = dayjs(launchpad.endAt * 1000).diff(dayjs())
    const rangeTimeStart = dayjs(launchpad.startAt * 1000).diff(dayjs())

    if (rangeTimeEnd < 0) {
      setLaunchpadStatus(ELaunchpadStatusString.PAST)
      setCountDown(dayjs().diff(dayjs(launchpad.endAt * 1000)))
    }

    if (rangeTimeStart < 0 && rangeTimeEnd > 0) {
      setTimeCountDown(fromUnixTime(launchpad.endAt))
      setLaunchpadStatus(ELaunchpadStatusString.OPEN)
    }

    if (rangeTimeStart > 0 && rangeTimeEnd > 0) {
      setTimeCountDown(fromUnixTime(launchpad.startAt))
      setLaunchpadStatus(ELaunchpadStatusString.UPCOMMING)
    }
  }

  let Component: any = Fragment

  if (to) {
    Component = Link
  }

  const loading = countDown === undefined && timeCountDown === undefined

  const CountdownRender = ({ days, hours, minutes, seconds }: any) => {
    const format = `${days}D ${zeroPad(hours)}H ${zeroPad(minutes)}M ${zeroPad(seconds)}S`
    return <span>{format}</span>
  }

  const PastRender = ({ countDown }: { countDown: number }) => {
    return <span>{`${convertNumberToDaysFormat(countDown)} Ago`}</span>
  }

  const pricePerText = tokenUSDRate({
    hardCap: launchpad.hardCap,
    totalSell: launchpad.totalRaise,
    hardCapDecimal: +launchpad.project.paymentDecimal,
    totalRaiseDecimal: +launchpad.project.tokenDecimal,
    tokenSymbol: launchpad.project.tokenSymbol,
    paymentSymbol: launchpad.project.paymentSymbol
  })

  return (
    <Component to={to}>
      <ProjectCardStyleWrapper>
        <div className='previous-item hover-shape-border hover-shape-inner'>
          <div className='previous-gaming'>
            <div className='previous-image'>
              <ImgProfile path={launchpad.project.logoUrl || projectThumb1} alt='Previous item thumb' />
            </div>
            <div className='previous-price'>
              <div>
                <h4 className='mb-10 name'>
                  <Component to={to}>{launchpad.project.name}</Component>
                </h4>
                <div className='dsc'>{pricePerText}</div>
              </div>
            </div>
          </div>
          <div className='previous-chaining'>
            <img
              src={blockchainList.find((chain) => chain.id === launchpad.chain)?.icon || projectThumb1}
              alt='Chain icon'
            />
          </div>
          <div className={`previous-launched ${loading ? "loading" : ""}`}>
            {!loading ? (
              launchpadStatus === ELaunchpadStatusString.PAST && countDown !== undefined ? (
                <PastRender countDown={countDown} />
              ) : (
                <Countdown date={dayjs(timeCountDown).format()} renderer={CountdownRender} />
              )
            ) : (
              <Skeleton />
            )}
          </div>
          <div className='previous-launchpad-type'>
            <span>{LaunchpadName[launchpad.type]}</span>
          </div>
          <div className='previous-raise'>
            <span>
              {isNaN(Number(launchpad.totalRaise)) ? "0" : Number(formatEther(BigInt(launchpad.totalRaise))).toFixed(0)}{" "}
              {launchpad.project.tokenSymbol} ({progress})
            </span>
          </div>
          <div className='previous-progress'>
            <ProgressBar progress={launchpadStatus === ELaunchpadStatusString.UPCOMMING ? "0%" : progress} />
          </div>
          <CardHover />
        </div>
      </ProjectCardStyleWrapper>
    </Component>
  )
}

export default ProjectCard
