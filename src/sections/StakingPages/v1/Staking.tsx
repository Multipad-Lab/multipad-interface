import StakeFarmYour from "src/sections/StakeFarmYour"
import StakeForm from "./StakeForm/StakeForm"
import StakingStyleWrapper from "./Staking.style"

const Staking = ({ handleUpdateStakeHistory }: { handleUpdateStakeHistory?: (value: boolean) => void }) => {
  return (
    <StakingStyleWrapper>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-7 mb-5'>
            <StakeFarmYour />
          </div>
          <div className='col-lg-5'>
            <StakeForm handleUpdateStakeHistory={handleUpdateStakeHistory} />
          </div>
        </div>
      </div>
    </StakingStyleWrapper>
  )
}

export default Staking
