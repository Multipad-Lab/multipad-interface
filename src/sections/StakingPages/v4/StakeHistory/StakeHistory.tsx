import { useCallback, useEffect, useState } from "react"
import StakeHistoryStyleWrapper from "./StakeHistoryStyleWrapper.style"
import headingShape from "src/assets/images/icons/steps.png"
import { HistoryStake, HistoryStatus, getHistoryStake } from "src/apis/stake/getHistoryStake"
import Spin from "src/components/Spin/Spin"
import StakeHistoryItem from "../StakeHistoryItem/StakeHistoryItem"
import { useNetwork } from "wagmi"
import { Tab, Tabs, TabList } from "react-tabs"
import { isEqual } from "lodash"
import Empty from "src/components/Empty/Empty"

const StakeHistory = ({
  isUpdateStakeHistory,
  handleUpdateStakeHistory
}: {
  isUpdateStakeHistory?: boolean
  handleUpdateStakeHistory?: (value: boolean) => void
}) => {
  const { chain } = useNetwork()
  const [historyStakeList, setHistoryStakeList] = useState<HistoryStake[]>([])
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<HistoryStatus>(HistoryStatus.ACTIVE)

  const handleGetHistoryStake = useCallback(() => {
    if (!chain?.id) return

    setLoading(true)
    getHistoryStake({ chainId: chain.id, status: status })
      .then((res) => {
        setHistoryStakeList(res.data)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [chain?.id, status])

  useEffect(() => {
    handleGetHistoryStake()
  }, [handleGetHistoryStake])

  const handleFetchingData = () => {
    if (!chain?.id) return
    setLoading(true)
    getHistoryStake({ chainId: chain.id, status: status }).then((res) => {
      if (isEqual(historyStakeList, res.data)) {
        setTimeout(() => {
          handleFetchingData()
        }, 2000)
      } else {
        setHistoryStakeList(res.data)
        setLoading(false)
        handleUpdateStakeHistory?.(false)
      }
    })
  }

  useEffect(() => {
    if (isUpdateStakeHistory) {
      handleFetchingData()
    }
  }, [isUpdateStakeHistory])

  const handleChangeTab = (value: HistoryStatus) => {
    setStatus(value)
  }

  return (
    <StakeHistoryStyleWrapper id='schedule'>
      <h3 className='widget_title'>
        STAKE HISTORY <img src={headingShape} alt='shape' />
      </h3>
      <Tabs onSelect={(value) => handleChangeTab(value as HistoryStatus)}>
        <TabList>
          <div className='tab_btn_wrapper'>
            {[
              { label: "ACTIVE", value: HistoryStatus.ACTIVE },
              { label: "INACTIVE", value: HistoryStatus.INACTIVE }
            ].map((tab) => (
              <Tab key={tab.value}>
                <button>{tab.label}</button>
              </Tab>
            ))}
          </div>
          <div className='item_sorting_list'></div>
        </TabList>
      </Tabs>
      <Spin spinning={loading}>
        <div className='schedule_table'>
          <table>
            <tbody>
              <tr className='table-header'>
                <th>NO.</th>
                <th>START</th>
                {status === HistoryStatus.INACTIVE && <th>UNLOCK</th>}
                <th>LOCKED</th>
                <th>REWARDS</th>
                {status === HistoryStatus.ACTIVE && <th>Action</th>}
              </tr>
              {historyStakeList.map((item, index) => (
                <StakeHistoryItem
                  key={index}
                  status={status}
                  onFetchingData={handleFetchingData}
                  no={index + 1}
                  item={item}
                />
              ))}
            </tbody>
          </table>

          {!loading && !historyStakeList.length && (
            <div className='text-center mt-5'>
              <Empty />
            </div>
          )}
        </div>
      </Spin>
    </StakeHistoryStyleWrapper>
  )
}

export default StakeHistory
