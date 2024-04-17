import { useState } from "react"
import { ModalContext } from "./ModalContext"
import { AccountType } from "src/types/account"

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [walletModalvisibility, setModalvisibility] = useState(false)
  const [shareModalVisibility, setShareModalvisibility] = useState(false)
  const [account, setAccount] = useState<AccountType>()
  const [buyMlpModal, setBuyMlpModal] = useState(false)
  const [farmCalculationModal, setFarmCalculationModal] = useState(false)

  const handleAccountConnect = (acc?: AccountType) => {
    setAccount(acc)
  }

  const walletModalHandle = () => {
    setModalvisibility(!walletModalvisibility)
  }

  const shareModalHandle = (e: any) => {
    e.preventDefault()
    setShareModalvisibility(!shareModalVisibility)
  }

  const handleBuyMlpModal = () => {
    setBuyMlpModal(!buyMlpModal)
  }

  const handleFarmCalculationModal = () => {
    setFarmCalculationModal(!farmCalculationModal)
  }

  return (
    <ModalContext.Provider
      value={{
        walletModalHandle,
        walletModalvisibility,
        shareModalVisibility,
        shareModalHandle,
        handleAccountConnect,
        account,
        buyMlpModal,
        handleBuyMlpModal,
        handleFarmCalculationModal,
        farmCalculationModal
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export default ContextProvider
