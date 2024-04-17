import { LaunchpadType, PoolData } from "src/types/viiewPool"
import { RiTwitterXFill } from "react-icons/ri"
import { LiaTelegram } from "react-icons/lia"
import logoDark from "src/assets/images/logo-dark.svg"
import { AdminProjectStatusType } from "src/types/adminProjectList"

export const confirmCheckList = [
  {
    value: 0,
    text: "I declare that I am NOT a resident of the prohibited territories or possessions as listed above."
  },
  {
    value: 1,
    text: "I have read, Understood , and agree with the Privacy Policy and the Term of Service"
  },
  {
    value: 2,
    text: "I declare that, I am the resident of"
  }
]

export const mockPoolData: PoolData = {
  name: "Multipad",
  dsc: `Multipad Chain is a platform for those looking to explore the unique opportunities offered by blockchain technology.`,
  symbol: "MLP",
  label: "Riskless",
  address: "0x1Ca439F0545CDfdbEF7C1199dAF0E667fC970D03",
  join_network: "binance",
  token_network: "binance",
  pool_icon: logoDark,
  rate: 0.1,
  ido_suply: 2000000,
  total_suply: 100000000
}

export const socialLinks = [
  {
    icon: <LiaTelegram />,
    field: "telegram"
  },
  {
    icon: <RiTwitterXFill />,
    field: "twitter"
  }
]

export const launchpadTypeObject: { [key in LaunchpadType]: string } = {
  [LaunchpadType.GUARANTEED]: "Guaranteed",
  [LaunchpadType.COMMUNITY]: "Community",
  [LaunchpadType.FCFS]: "FCFS"
}

export const launchpadData = [
  {
    _id: "65d74aa1b2c2fd5fd3f60eea",
    contractAddress: "0x9d9ca239b07eb25725b1a271a8072a23e369c9fe",
    chain: 97,
    paymentAddress: "0x0000000000000000000000000000000000000000",
    ownerAddress: "0x9d9ca239b07eb25725b1a271a8072a23e369c9fe",
    type: LaunchpadType.GUARANTEED,
    minBuy: "1000000000000000000",
    maxBuy: "10000000000000000000",
    softCap: "1000000000000000000",
    hardCap: "10000000000000000000",
    startAt: 1708534800,
    endAt: 1708707600,
    totalCurrent: "0",
    totalRaise: "100000000000000000000",
    claimAt: 1709707600,
    isVesting: 0,
    isFcfs: 0,
    isWhitelist: 0,
    isKYC: 0,
    userKYC: 0,
    ignoreFullSlot: 0,
    status: 0 as AdminProjectStatusType,
    project: "65d74958fcbf4eadefa6eaa9",
    uuid: "5532e72f-5692-4b44-9209-f59ab1490889",
    createdAt: "2024-02-22T13:22:41.575Z",
    updatedAt: "2024-02-22T16:37:57.993Z",
    __v: 0
  }
]

export const mockProject = {
  _id: "65d74958fcbf4eadefa6eaa9",
  name: "Thai test",
  logoUrl: "https://cdn.pixabay.com/photo/2022/01/17/17/20/bored-6945309_640.png",
  backgroundUrl: '"string"',
  description: "string",
  fulltextInfoProject: "string",
  website: "string",
  telegram: "string",
  twitter: "string",
  medium: "string",
  ownerAddress: "0x9d9ca239b07eb25725b1a271a8072a23e369c9fe",
  tokenAddress: "0x9d9ca239b07eb25725b1a271a8072a23e369c9fe",
  paymentAddress: "0x0000000000000000000000000000000000000000",
  chain: 97,
  tokenSymbol: "TTT",
  paymentSymbol: "BNB",
  tokenDecimal: 18,
  paymentDecimal: 18,
  pricePer: 0.001,
  pricePerText: "1 (TTT) = 0.001 (BNB)",
  status: 1 as AdminProjectStatusType,
  label: ["riskless"],
  totalSupply: 10000,
  uuid: "2484050f-1009-4340-8363-4dac72f8163f",
  createdAt: "2024-02-22T13:17:12.332Z",
  updatedAt: "2024-02-23T15:18:27.130Z",
  __v: 0
}
