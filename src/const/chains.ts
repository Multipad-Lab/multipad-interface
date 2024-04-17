import binanceIcon from "src/assets/images/icons/binance.svg"
import ethereumIcon from "src/assets/images/icons/ethereum.svg"
import arbitrumIcon from "src/assets/images/icons/arbitrum.svg"

export const AVAILABLE_CHAINS = [
  { label: "Binance", key: 1, icon: binanceIcon, symbol: "BSC", chainId: 97 },
  { label: "Ethereum", key: 2, icon: ethereumIcon, symbol: "ETH", chainId: 1 },
  { label: "Arbitrum", key: 3, icon: arbitrumIcon, symbol: "ARB", chainId: 42161 }
]
