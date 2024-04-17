import { LaunchpadItemType, LaunchpadType } from "src/types/viiewPool"
import LaunchpadCardStyleWrapper from "./LaunchpadCard.style"
import { launchpadTypeObject } from "src/const/view-pool"
import RightInfoRow from "../../PoolInfro/RightInfoRow/RightInfoRow"
import dayjs from "dayjs"
import advancedFormat from "dayjs/plugin/advancedFormat.js"
import ProgressBar from "src/components/progressBar"
import { convertFixed2Amount, tokenUSDRate } from "src/utils/commons"
import CardHover from "src/components/cardHover"
import { AdminProjectResponseType } from "src/types/adminProjectList"
import { divide } from "lodash"
import HandleButtons from "./HandleButtons"
import { useIDOData } from "src/hooks/ido/useIDOData"
import { formatEther, formatUnits } from "viem"
import { LaunchpadStatus } from "src/types/userLaunchpadList"
import Countdown, { zeroPad } from "react-countdown"
import Spin from "src/components/Spin/Spin"
import { useState } from "react"

dayjs.extend(advancedFormat)

const LaunchpadCard = ({ data, projectData }: { data: LaunchpadItemType; projectData?: AdminProjectResponseType }) => {
  const dataOnChain = useIDOData({ data: { launchpad: data, projectData } })
  const totalRaised = dataOnChain.totalRaised ? formatEther(dataOnChain.totalRaised) : 0
  const hardCap = dataOnChain.hardCap ? formatEther(dataOnChain.hardCap) : 0
  const progress = Number(hardCap) > 0 ? divide(Number(totalRaised), Number(hardCap)) * 100 : 0
  const maxBuyAmount = totalRaised === hardCap
  const [isRefetch, setIsRefetch] = useState(false)
  const CountdownRender = ({ days, hours, minutes, seconds }: any) => {
    const format = `${days}D ${zeroPad(hours)}H ${zeroPad(minutes)}M ${zeroPad(seconds)}S`
    return <span>{format}</span>
  }

  const handleRefetchDataOnChain = () => {
    setIsRefetch(true)

    setTimeout(() => {
      dataOnChain.refetch()
      setIsRefetch(false)
    }, 1000)
  }

  const pricePerText = tokenUSDRate({
    hardCap: data.hardCap,
    totalSell: data.totalRaise,
    hardCapDecimal: Number(projectData?.paymentDecimal || 18),
    totalRaiseDecimal: Number(projectData?.tokenDecimal || 18),
    tokenSymbol: projectData?.tokenSymbol || "",
    paymentSymbol: projectData?.paymentSymbol || ""
  })

  return (
    <Spin spinning={isRefetch}>
      <LaunchpadCardStyleWrapper>
        {dataOnChain.launchpadStatus === LaunchpadStatus.ENDED && <div className='launchpad-card-ended'>Ended</div>}
        {dataOnChain.launchpadStatus === LaunchpadStatus.CANCELLED && (
          <div className='launchpad-card-ended'>Cancelled</div>
        )}
        {dataOnChain.launchpadStatus === LaunchpadStatus.PENDING && (
          <div className='launchpad-card-upcomming'>Upcomming</div>
        )}

        <h3>{launchpadTypeObject[data.type]}</h3>
        <div className='symbol'>
          <div className='icon' style={{ backgroundImage: `url(${projectData?.logoUrl})` }}>
            {/* <img src={projectData?.logoUrl} alt={projectData?.tokenSymbol} /> */}
          </div>
          {projectData?.tokenSymbol && <span>{`${projectData?.tokenSymbol} / ${projectData?.paymentSymbol}`}</span>}
        </div>
        <div className='info'>
          <RightInfoRow
            title='Total Raise'
            content={
              <>{`${convertFixed2Amount(+formatUnits(BigInt(data.hardCap), Number(projectData?.paymentDecimal || 18)), 0)} (${projectData?.paymentSymbol || ""})`}</>
            }
          />
          <RightInfoRow title='Swap Rate' content={<>{pricePerText || "-"}</>} />
          {data.type !== LaunchpadType.GUARANTEED && (
            <>
              <RightInfoRow
                title='Min Buy'
                content={
                  <>
                    {data?.minBuy
                      ? `${convertFixed2Amount(+formatUnits(BigInt(data.minBuy), Number(projectData?.paymentDecimal || 18)), 0)} (${projectData?.paymentSymbol || ""})`
                      : "-"}
                  </>
                }
              />
              <RightInfoRow
                title='Max Buy'
                content={
                  <>
                    {data?.maxBuy
                      ? `${convertFixed2Amount(+formatUnits(BigInt(data.maxBuy), Number(projectData?.paymentDecimal || 18)), 0)} (${projectData?.paymentSymbol || ""})`
                      : "-"}
                  </>
                }
              />
            </>
          )}
          <RightInfoRow
            title='Purchased Amount'
            content={
              <>{`${convertFixed2Amount(Number(formatEther(BigInt(dataOnChain.purchaseAmount))))} (${projectData?.paymentSymbol || ""})`}</>
            }
          />
          <RightInfoRow
            title='Start Time'
            content={
              dataOnChain.launchpadStatus === LaunchpadStatus.PENDING ? (
                <Countdown
                  date={dayjs(data.startAt * 1000).valueOf()}
                  renderer={CountdownRender}
                  onComplete={() => !isRefetch && handleRefetchDataOnChain()}
                />
              ) : (
                <>{dayjs(data.startAt * 1000).format("hh:mm A UTC, MMM Do YYYY")}</>
              )
            }
          />
          <RightInfoRow
            title='End Time'
            content={
              dataOnChain.launchpadStatus === LaunchpadStatus.ACTIVE ? (
                <Countdown
                  date={dayjs(data.endAt * 1000).valueOf()}
                  renderer={CountdownRender}
                  onComplete={() => !isRefetch && handleRefetchDataOnChain()}
                />
              ) : (
                <>{dayjs(data.endAt * 1000).format("hh:mm A UTC, MMM Do YYYY")}</>
              )
            }
          />
          {data.type === LaunchpadType.GUARANTEED && (
            <RightInfoRow
              title='Allocated'
              content={
                <>
                  {convertFixed2Amount(Number(formatEther(BigInt(dataOnChain.buyAmountOfTier))))} (
                  {projectData?.paymentSymbol})
                </>
              }
            />
          )}
          <div className='vesting' style={{ marginBottom: 6 }}>
            <span>Vesting:</span>

            <div className='vesting-content'>{data.vestingText || "-"}</div>
          </div>
          <RightInfoRow
            title='Vesting Delay'
            content={<>{`${data.vestingDelay || 0} (${data.vestingDelay || 0 > 1 ? `Days` : "Day"})`}</>}
          />
        </div>

        <div className='commited_process'>
          <span>COMMIT PROGRESS</span>

          <div className='vesting-content'>{`${progress.toFixed(2)}%`}</div>
        </div>

        <div>
          <ProgressBar progress={`${progress.toFixed(2)}%`} />
        </div>

        <div className='commited_usdt'>{`${convertFixed2Amount(Number(totalRaised))} ${projectData?.paymentSymbol} / 
      ${convertFixed2Amount(Number(hardCap), 0)} ${projectData?.paymentSymbol}`}</div>

        {projectData && (
          <HandleButtons
            data={{
              maxBuyAmount,
              launchpad: data,
              projectData,
              dataOnChain
            }}
          />
        )}

        <CardHover />
      </LaunchpadCardStyleWrapper>
    </Spin>
  )
}

export default LaunchpadCard
