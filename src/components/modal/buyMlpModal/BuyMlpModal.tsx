import { FiX } from "react-icons/fi"
import { useModal } from "src/utils/ModalContext"
import BuyMlpModalStyleWrapper from "./BuyMlpModal.style"
import binanceIcon from "src/assets/images/icons/binance.svg"
import kucoinIcon from "src/assets/images/brands/kucoin.svg"
import bybitIcon from "src/assets/images/brands/bybit.svg"
import ethereumIcon from "src/assets/images/icons/ethereum.svg"
import uniswapIcon from "src/assets/images/icons/uniswap.svg"
import arbitrumIcon from "src/assets/images/icons/arbitrum.svg"
import camelotIcon from "src/assets/images/icons/camelot.svg"

const BuyMlpModal = () => {
  const { handleBuyMlpModal } = useModal()

  return (
    <>
      <BuyMlpModalStyleWrapper className='modal_overlay'>
        <div className='mint_modal_box'>
          <div className='mint_modal_content'>
            <div className='modal_header'>
              <h2>Options to buy $MPL from</h2>
              <button onClick={() => handleBuyMlpModal()}>
                <FiX />
              </button>
            </div>

            <div className='modal_body text-center'>
              <div className='exchanges__tokens'>
                <div className='tokens__item'>
                  <div className='tokens__item-name'>
                    <img src={binanceIcon} alt={"binance"} />
                    <p>Binance</p>
                  </div>

                  <div className='exchanges__item'>
                    <div className='exchanges__item-name'>
                      <img width={90} src={kucoinIcon} alt={"binance"} />
                    </div>
                    <div className='exchanges__item-name'>
                      <img width={65} src={bybitIcon} alt={"binance"} />
                    </div>
                  </div>
                </div>

                <div className='tokens__item'>
                  <div className='tokens__item-name'>
                    <img src={ethereumIcon} alt={"Ethereum"} />
                    <p>Ethereum</p>
                  </div>

                  <div className='exchanges__item'>
                    <div className='exchanges__item-name'>
                      <img width={90} src={uniswapIcon} alt={"uniswap"} />
                    </div>
                  </div>
                </div>

                <div className='tokens__item'>
                  <div className='tokens__item-name'>
                    <img src={arbitrumIcon} alt={"Arbitrum"} />
                    <p>Arbitrum</p>
                  </div>

                  <div className='exchanges__item'>
                    <div className='exchanges__item-name'>
                      <img width={75} src={camelotIcon} alt={"camelot"} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BuyMlpModalStyleWrapper>
    </>
  )
}

export default BuyMlpModal
