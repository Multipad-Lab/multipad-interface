import { FiX } from "react-icons/fi"
import CardHover from "src/components/cardHover"
import ProjectCardStyleWrapper from "./ProjectCard.style"
import { ELaunchpadStatusString } from "src/types/userLaunchpadList"
import { fromUnixTime } from "date-fns"
import ProgressBar from "src/components/progressBar"
import Button from "src/components/button"
import { divide, uniq } from "lodash"
import { routesName } from "src/const/routes"
import { routeTo } from "src/utils/services/routes"
import { formatEther } from "viem"
import { useEffect, useState } from "react"
import dayjs from "dayjs"
import { convertNumberToDaysFormat, tokenUSDRate } from "src/utils/commons"
import Countdown, { zeroPad } from "react-countdown"
import { Link } from "react-router-dom"
import { SelectedLaunchpadType } from "../ProjectCalendar"
import { launchpadTypeObject } from "src/const/view-pool"

const ProjectCard = ({ launchpad, modalHandle }: { launchpad: SelectedLaunchpadType; modalHandle: () => void }) => {
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

  const renderProjectListing = (launchpad: SelectedLaunchpadType) => {
    const launchpadTypeList = uniq(
      launchpad.groupLaunchpad
        .filter((lp) => lp.projectId === launchpad.projectId)
        .map((lp) => launchpadTypeObject[lp.type] || "")
    )

    return (
      <>
        <li>
          TOTAL RAISE
          <span>
            {formatEther(BigInt(launchpad.hardCap))} {launchpad.project.tokenSymbol} ({progress})
          </span>
        </li>
        <li className='project-progress'>
          <p>PROGRESS</p>
          <div className='progress-custom'>
            <ProgressBar progress={progress} />
          </div>
        </li>
        <li className='type-ido'>
          <span className='title'>TYPE IDO</span>
          <span className='content'>{launchpadTypeList.join(", ")}</span>
        </li>
      </>
    )
  }

  const CountdownRender = ({ days, hours, minutes, seconds }: any) => {
    const format = `${days}D ${zeroPad(hours)}H ${zeroPad(minutes)}M ${zeroPad(seconds)}S`
    return <span>{format}</span>
  }

  const PastRender = ({ countDown }: { countDown: number }) => (
    <span>{`${convertNumberToDaysFormat(countDown)} Ago`}</span>
  )

  const pricePerText = tokenUSDRate({
    hardCap: launchpad.hardCap,
    totalSell: launchpad.totalRaise,
    hardCapDecimal: +launchpad.project.paymentDecimal,
    totalRaiseDecimal: +launchpad.project.tokenDecimal,
    tokenSymbol: launchpad.project.tokenSymbol,
    paymentSymbol: launchpad.project.paymentSymbol
  })

  return (
    <ProjectCardStyleWrapper>
      <div className='close_btn' onClick={() => modalHandle()}>
        <FiX />
      </div>
      <div className='project-info d-flex'>
        <div className='project-card_thumb'>
          <img src={launchpad.project.logoUrl} alt='project thumb' />
        </div>
        <div className='project-auother'>
          <h4 className='mb-10'>
            <Link to={routeTo(routesName.PROJECT_DETAILS, { id: String(launchpad.project.uuid) })}></Link>
          </h4>
          <div className='dsc'>
            <p className='name'>{launchpad.project.name}</p>
            <p>{pricePerText}</p>
          </div>
        </div>
      </div>
      <div className='project-content'>
        <div className='project-header'>
          <div className='heading-title'>
            {launchpadStatus === ELaunchpadStatusString.PAST && countDown !== undefined ? (
              <PastRender countDown={countDown || 0} />
            ) : (
              <Countdown date={dayjs(timeCountDown).valueOf()} renderer={CountdownRender} />
            )}
          </div>
        </div>
        <ul className='project-listing'>{renderProjectListing(launchpad)}</ul>
        <div className='social-share'>
          <Button
            href={routeTo(routesName.PROJECT_DETAILS, { id: String(launchpad.project.uuid) })}
            className='btn-view-pool view-pool_custom'
            variant='mint'
            sm
          >
            View Pool
          </Button>
        </div>
      </div>
      <CardHover />
    </ProjectCardStyleWrapper>
  )
}

export default ProjectCard
