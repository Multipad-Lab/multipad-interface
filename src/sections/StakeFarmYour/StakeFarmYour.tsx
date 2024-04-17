import Button from "src/components/button"
import StakeFarmYourStyleWrapper from "./StakeFarmYour.style"
import bingXLogo from "src/assets/images/brands/bingx.svg"
import bitgetLogo from "src/assets/images/brands/bitget.svg"
import bybitLogo from "src/assets/images/brands/bybit.svg"
import kucoinLogo from "src/assets/images/brands/kucoin.svg"
import mexcGlobalLogo from "src/assets/images/brands/mexc-global.svg"
import { useModal } from "src/utils/ModalContext"

const StakeFarmYour = () => {
  const { handleBuyMlpModal } = useModal()

  return (
    <StakeFarmYourStyleWrapper>
      <div className='container'>
        <h3>
          Stake or farm your $MPL <br /> to join the bestIGOs
        </h3>
        <Button onClick={handleBuyMlpModal} variant='mint' md>
          Buy $MPL
        </Button>

        <div className='available-on'>AVAILABLE ON:</div>

        <div className='brands'>
          <img src={bingXLogo} alt='bing-x' />
          <img src={bitgetLogo} alt='bitget' />
          <img src={bybitLogo} alt='bybit' />
          <img src={mexcGlobalLogo} alt='mexc-global' />
          <img src={kucoinLogo} alt='kucoin' />
        </div>

        <div className='description'>
          Legacy $MPL staking and farming pools are closed. The new pools are open with Seed Staking Boosters. You can
          deposit now.
        </div>
      </div>
    </StakeFarmYourStyleWrapper>
  )
}

export default StakeFarmYour
