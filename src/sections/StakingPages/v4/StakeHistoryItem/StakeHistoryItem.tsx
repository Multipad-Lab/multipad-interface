import { HistoryStake, HistoryStatus } from "src/apis/stake/getHistoryStake"
import Button from "src/components/button"
import { useClaimReward } from "src/hooks/staking/useClaimReward"
import { useEffect } from "react"
import { useUnStake } from "src/hooks/staking/useUnStake"
import { useRewardStake } from "src/hooks/staking/useRewardStake"
import dayjs from "dayjs"
import { customToFixed } from "src/utils/commons"

const StakeHistoryItem = ({
  item,
  no,
  onFetchingData,
  status
}: {
  item: HistoryStake
  no: number
  onFetchingData: () => void
  status: HistoryStatus
}) => {
  const { onClaimRewardWrite, isLoadingClaimReward, isSuccessClaimReward } = useClaimReward({ history: item })
  const { onUnStakeWrite, isLoadingUnStake, isSuccessUnStake } = useUnStake({ history: item })
  const { reward, refetchReward } = useRewardStake({ history: item })

  const startTimeParsed = dayjs(item.startTime)
  const endTime = startTimeParsed.add(item.stakePool.duration, "second")
  const isDisabled = endTime.isAfter(dayjs())

  useEffect(() => {
    if (isSuccessClaimReward || isSuccessUnStake) {
      refetchReward()
      onFetchingData()
    }
  }, [isSuccessClaimReward, isSuccessUnStake])

  const handleClaim = () => {
    onClaimRewardWrite()
  }

  const handleUnStake = () => {
    onUnStakeWrite()
  }

  return (
    <tr>
      <td>{no}</td>
      <td>{dayjs(item.startTime).format("YYYY-MM-DD HH:mm:ss")}</td>
      {status === HistoryStatus.INACTIVE && <td>{item.endTime}</td>}
      <td>{item.amount.toFixed(2)} MPL</td>
      <td>{customToFixed(reward, 6)} MPL</td>
      {status === HistoryStatus.ACTIVE && (
        <td>
          <div className='d-flex gap-2'>
            <Button
              disabled={dayjs().isBefore(item.canClaim) || reward < 0.001}
              loading={isLoadingClaimReward}
              variant='dark'
              onClick={handleClaim}
            >
              Claim
            </Button>
            <Button disabled={isDisabled} loading={isLoadingUnStake} variant='dark' onClick={handleUnStake}>
              Unstake
            </Button>
          </div>
        </td>
      )}
    </tr>
  )
}

export default StakeHistoryItem
