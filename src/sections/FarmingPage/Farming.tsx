import StakeFarmYour from "../StakeFarmYour"
import FarmForm from "./FarmForm/FarmForm"
import FarmingStyleWrapper from "./Farming.style"

const Farming = () => {
  return (
    <FarmingStyleWrapper>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-7 mb-5'>
            <StakeFarmYour />
          </div>
          <div className='col-lg-5'>
            <FarmForm />
          </div>
        </div>
      </div>
    </FarmingStyleWrapper>
  )
}

export default Farming
