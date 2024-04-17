import { FiX } from "react-icons/fi"
import { useModal } from "src/utils/ModalContext"
import FarmCalculationModalStyleWrapper from "./farmCalculationModal.style"

const FarmCalculationModal = () => {
  const { handleFarmCalculationModal } = useModal()

  return (
    <FarmCalculationModalStyleWrapper className='modal_overlay'>
      <div className='mint_modal_box'>
        <div className='mint_modal_content'>
          <div className='modal_header'>
            <h2>Farm Calculation</h2>
            <button onClick={handleFarmCalculationModal}>
              <FiX />
            </button>
          </div>

          <div className='modal_body text-center'>
            <div className='calculator-value'>1000</div>

            <div className='calculator-list'>
              <div className='calculator-item'>
                <div>1D</div>
                <div>1,000.00</div>
              </div>

              <div className='calculator-item'>
                <div>7D</div>
                <div>7,000.00</div>
              </div>

              <div className='calculator-item'>
                <div>30D</div>
                <div>30,000.00</div>
              </div>

              <div className='calculator-item'>
                <div>APR</div>
                <div>50.00%</div>
              </div>
            </div>
          </div>

          <div className='modal_bottom_text'>
            Calculated based on current rates. Rates are estimates provided for your convenience only, and by no means
            represent guaranteed returns.
          </div>
        </div>
      </div>
    </FarmCalculationModalStyleWrapper>
  )
}

export default FarmCalculationModal
