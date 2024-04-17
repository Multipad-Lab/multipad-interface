import { createContext, useContext } from "react"
import { AccountType } from "src/types/account"

type ContextProp = {
  walletModalHandle: () => void
  walletModalvisibility: boolean
  shareModalVisibility: boolean
  shareModalHandle: (e: any) => void
  handleAccountConnect: (acc?: AccountType) => void
  account: AccountType | undefined
  buyMlpModal: boolean
  handleBuyMlpModal: () => void
  handleFarmCalculationModal: () => void
  farmCalculationModal: boolean
  handleMetamaskModal?: () => void
}

export const ModalContext = createContext({} as ContextProp)

export const useModal = () => useContext(ModalContext)
