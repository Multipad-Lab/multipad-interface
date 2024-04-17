import StakingStyleWrapper from "./Staking.style"
import StakeHistory from "../v4/StakeHistory/StakeHistory"
import ConnectButton from "src/components/connectButton"
import { useModal } from "src/utils/ModalContext"
import StakingPages from "src/sections/StakingPages/v1"
import { useState } from "react"

const Staking = ({ handleRefetch }: { handleRefetch?: (value: boolean) => void }) => {
  const { account } = useModal()
  const [isUpdateStakeHistory, setUpdateStakeHistory] = useState(false)

  const handleUpdateStakeHistory = (value: boolean) => {
    setUpdateStakeHistory(value)
    handleRefetch?.(true)
  }

  return (
    <StakingStyleWrapper>
      {account?.address ? (
        <StakingPages handleUpdateStakeHistory={handleUpdateStakeHistory} />
      ) : (
        <div className='d-flex justify-content-center'>
          <ConnectButton />
        </div>
      )}

      <div className='container'>
        <StakeHistory isUpdateStakeHistory={isUpdateStakeHistory} handleUpdateStakeHistory={handleUpdateStakeHistory} />
      </div>
    </StakingStyleWrapper>
  )
}

export default Staking
