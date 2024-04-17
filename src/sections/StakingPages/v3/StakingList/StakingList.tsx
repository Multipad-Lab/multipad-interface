import { useEffect, useState } from "react"
import StakingItem from "./StakingItem/StakingItem"
import StakingListStyleWrapper from "./StakingList.style"
import { StakeFilter, getStakeFilter } from "src/apis/stake/getStakeFilter"
import Spin from "src/components/Spin/Spin"
import data from "src/assets/data/staking/dataV1"
import { Address, useNetwork } from "wagmi"

const StakingList = ({ handleContractAddress }: { handleContractAddress: (value: Address) => void }) => {
  const { chain } = useNetwork()
  const [tierList, setTierList] = useState<StakeFilter[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!chain?.id) return

    setLoading(true)
    getStakeFilter({ chainId: chain.id, sortBy: "idOnChain", orderBy: "asc" })
      .then((res) => {
        setTierList(res.data)
        handleContractAddress(res.data?.[0]?.address)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [chain?.id])

  return (
    <StakingListStyleWrapper>
      <div className='container'>
        <Spin spinning={loading}>
          <div className='row staking_items_row'>
            {tierList?.map((stake, i) => (
              <div key={i} className='col-lg-4 col-md-6'>
                <StakingItem stake={stake} icon={data?.[i]?.icon || data?.[0]?.icon} />
              </div>
            ))}
          </div>
        </Spin>
      </div>
    </StakingListStyleWrapper>
  )
}

export default StakingList
