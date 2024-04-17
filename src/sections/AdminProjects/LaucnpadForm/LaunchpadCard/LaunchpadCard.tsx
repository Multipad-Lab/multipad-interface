import { LaunchpadItemType, LaunchpadType } from "src/types/viiewPool"
import LaunchpadCardStyleWrapper from "./LaunchpadCard.style"
import { launchpadTypeObject } from "src/const/view-pool"
import dayjs from "dayjs"
import Button from "src/components/button"
import advancedFormat from "dayjs/plugin/advancedFormat.js"
import ProgressBar from "src/components/progressBar"
import { convertAddress, tokenUSDRate, copyToClipboard, convertFixed2Amount } from "src/utils/commons"
import CardHover from "src/components/cardHover"
import { AdminProjectResponseType } from "src/types/adminProjectList"
import { divide } from "lodash"
import RightInfoRow from "src/sections/ViewPool/PoolInfro/RightInfoRow/RightInfoRow"
import { formatUnits } from "viem"
import iconCopy from "src/assets/images/icons/iconCopy.svg"
import { toast } from "react-toastify"

dayjs.extend(advancedFormat)

const LaunchpadCard = ({ data, projectData }: { data: LaunchpadItemType; projectData?: AdminProjectResponseType }) => {
  const progress = divide(Number(data.totalCurrent), Number(data.hardCap)) * 100
  const isEnded = dayjs(data.endAt * 1000).diff(dayjs()) < 0
  const isPending = dayjs(data.startAt * 1000).diff(dayjs()) > 0

  const handleCopyAddress = () => {
    data?.contractAddress && copyToClipboard(data.contractAddress)
    toast.success("copied to clipboard!", { position: "top-center" })
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
    <LaunchpadCardStyleWrapper>
      {isEnded && <div className='launchpad-card-ended'>Ended</div>}
      {isPending && <div className='launchpad-card-upcomming'>Upcomming</div>}

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
          title='Start Time'
          content={<>{dayjs(data.startAt * 1000).format("hh:mm A UTC, MMM Do YYYY")}</>}
        />
        <RightInfoRow title='End Time' content={<>{dayjs(data.endAt * 1000).format("hh:mm A UTC, MMM Do YYYY")}</>} />
        <div className='vesting' style={{ marginBottom: 6 }}>
          <span>Vesting:</span>

          <div className='vesting-content'>{data.vestingText || "-"}</div>
        </div>
        <RightInfoRow
          title='Address'
          content={
            <>
              {convertAddress(data.contractAddress)}
              <img
                style={{ cursor: "pointer", marginLeft: "10px" }}
                onClick={handleCopyAddress}
                src={iconCopy}
                alt='icon copy'
              />
            </>
          }
        />
      </div>

      <div className='commited_process'>
        <span>COMMIT PROGRESS</span>

        <div className='vesting-content'>{`${progress.toFixed(2)}%`}</div>
      </div>

      <div>
        <ProgressBar progress={`${progress.toFixed(2)}%`} />
      </div>

      <div className='commited_usdt'>{`${convertFixed2Amount(+formatUnits(BigInt(data.totalCurrent), Number(projectData?.paymentDecimal || 18)))} ${projectData?.paymentSymbol} / 
      ${convertFixed2Amount(+formatUnits(BigInt(data.hardCap), Number(projectData?.paymentDecimal || 18)), 0)} ${projectData?.paymentSymbol}`}</div>

      <Button className='button' variant='outline' style={{ color: "white" }}>
        VIEW DETAILS
      </Button>

      <CardHover />
    </LaunchpadCardStyleWrapper>
  )
}

export default LaunchpadCard
