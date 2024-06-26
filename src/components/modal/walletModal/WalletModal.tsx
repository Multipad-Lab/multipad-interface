import { useModal } from "src/utils/ModalContext"
import { FiX, FiChevronRight } from "react-icons/fi"
import WalletModalStyleWrapper from "./WalletModal.style"
import metamaskIcon from "src/assets/images/icons/meta-mask.png"
import coinBase from "src/assets/images/icons/coinbase.png"
import trustWalletIcon from "src/assets/images/icons/trust.png"
import walletConnect from "src/assets/images/icons/wallet.png"

const WalletModal = () => {
  const { walletModalHandle } = useModal()

  const handleMetamask = async (e: any) => {
    e.preventDefault()
  }

  return (
    <>
      <WalletModalStyleWrapper className='modal_overlay'>
        <div className='mint_modal_box'>
          <div className='mint_modal_content'>
            <div className='modal_header'>
              <h2>CONNECT WALLET</h2>
              <p>Please select a wallet to connect to this marketplace</p>
              <button onClick={() => walletModalHandle()}>
                <FiX />
              </button>
            </div>
            <div className='modal_body text-center'>
              <div className='wallet_list'>
                <a href='#' onClick={(e) => handleMetamask(e)}>
                  <img src={metamaskIcon} alt='Meta-mask-Image' />
                  MetaMask
                  <span>
                    <FiChevronRight />
                  </span>
                </a>
                <a href='# '>
                  <img src={coinBase} alt='Coinbase-Image' />
                  Coinbase
                  <span>
                    <FiChevronRight />
                  </span>
                </a>
                <a href='# '>
                  <img src={trustWalletIcon} alt='Trust-Image' />
                  Trust Wallet
                  <span>
                    <FiChevronRight />
                  </span>
                </a>
                <a href='# '>
                  <img src={walletConnect} alt='Wallet-Image' />
                  WalletConnect
                  <span>
                    <FiChevronRight />
                  </span>
                </a>
              </div>
              <div className='modal_bottom_text'>
                By connecting your wallet, you agree to our
                <a href='# '>Terms of Service</a>
                <a href='#'>Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </WalletModalStyleWrapper>
    </>
  )
}

export default WalletModal
