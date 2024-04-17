import { AdminProjectFormType } from "src/types/adminProjectList"

export const initForm: AdminProjectFormType = {
  name: "",
  logoUrl: "",
  backgroundUrl: "",
  images: "",
  description: "",
  fulltextInfoProject: "",
  website: "",
  telegram: "",
  twitter: "",
  ownerAddress: "",
  tokenAddress: "",
  paymentAddress: "0x778033B611c118E89DF086988F5d9b8504491ec9",
  chain: 97,
  tokenSymbol: "",
  paymentSymbol: "USDT",
  tokenDecimal: "",
  paymentDecimal: "18",
  status: 1,
  label: [],
  totalSupply: ""
}
export const DEFAULT_ADDRESS = "0x0000000000000000000000000000000000000000"

export const chainList = [
  {
    name: "Binance Smart Chain",
    chainId: 97,
    paymentAddress: "0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
    decimal: 18,
    symbol: "BNB"
  }
]

export const projectLabelList = [
  {
    value: "riskless",
    text: "Riskless"
  },
  {
    value: "shielded",
    text: "Shielded"
  }
]

export const paymentList = [
  {
    symbol: "BNB",
    address: "0x0000000000000000000000000000000000000000",
    decimal: 18,
    label: "Native Coin"
  },
  {
    symbol: "USDT",
    address: "0x778033B611c118E89DF086988F5d9b8504491ec9",
    decimal: 18,
    label: "USDT"
  }
]
