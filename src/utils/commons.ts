import { divide, multiply } from "lodash"
import { NUMBER_REGEX } from "src/const"
import { AVAILABLE_CHAINS } from "src/const/chains"
import contractErrors from "src/const/contractError"
import { formatUnits } from "viem"

export const convertNumberToTimeFormat = (milliseconds: number) => {
  const totalSeconds = Math.floor(milliseconds / 1000)
  const totalMinutes = Math.floor(totalSeconds / 60)
  const totalHours = Math.floor(totalMinutes / 60)
  const totalDays = Math.floor(totalHours / 24)

  return `${totalDays}D ${("0" + (totalHours % 24)).slice(-2)}H ${("0" + (totalMinutes % 60)).slice(-2)}M ${("0" + (totalSeconds % 60)).slice(-2)}S`
}

export const convertNumberToDaysFormat = (milliseconds: number) => {
  const totalSeconds = Math.floor(Math.abs(milliseconds) / 1000)
  const totalMinutes = Math.floor(totalSeconds / 60)
  const totalHours = Math.floor(totalMinutes / 60)
  const totalDays = Math.floor(totalHours / 24)
  const result = totalDays < 1 ? (totalHours < 1 ? totalMinutes : totalHours) : totalDays

  return `${result} ${totalDays < 1 ? (totalHours < 1 ? (totalMinutes === 1 ? "Minute" : "Minutes") : totalHours === 1 ? "Hour" : "Hours") : totalDays === 1 ? "Day" : "Days"}`
}

export const convertAddress = (adress: string, number = 5) => {
  const start = adress.slice(0, number)
  const end = adress.slice(-number)
  return `${start}...${end}`
}

export const copyToClipboard = async (text: string) => {
  await navigator.clipboard.writeText(text)
}

export const getTokenIcon = (chain?: number | string) => {
  if (!chain) return AVAILABLE_CHAINS[0].icon
  const token = AVAILABLE_CHAINS.find((token) => token.chainId === Number(chain))

  return token?.icon || AVAILABLE_CHAINS[0].icon
}

export const getTokenSymbol = (chain?: number | string) => {
  if (!chain) return AVAILABLE_CHAINS[0].symbol
  const token = AVAILABLE_CHAINS.find((token) => token.chainId === Number(chain))

  return token?.symbol || AVAILABLE_CHAINS[0].symbol
}

export const convertFixed2Amount = (amount: number, fixedNumber = 2) => {
  return Number(amount.toFixed(fixedNumber)).toLocaleString(undefined, { minimumFractionDigits: fixedNumber })
}

export const customToFixed = (value: number, decimalPlaces: number) => {
  const valueSplit = `${value.toFixed(100)}`.split(".")

  if (valueSplit.length <= 1) return value

  return `${valueSplit?.[0]}.${valueSplit?.[1]?.substring(0, decimalPlaces)}`
}
export const convertTokenAmountToShow = (amount: string | number, tokenDecimal?: string | number) => {
  return divide(Number(amount), tokenDecimal ? Math.pow(10, Number(tokenDecimal)) : 18)
}

export const convertTokenAmountToCall = (amount: string | number, tokenDecimal?: string | number) => {
  return multiply(Number(amount), tokenDecimal ? Math.pow(10, Number(tokenDecimal)) : 18)
}

export const toCapitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const isNumber = (value: string) => {
  if (value) {
    if (
      value.includes(".") &&
      ((!NUMBER_REGEX.test(value) && value.split(".").length > 2) ||
        (value.split(".")[1] && !NUMBER_REGEX.test(value.split(".")[1])))
    )
      return false

    if (!value.includes(".") && !NUMBER_REGEX.test(value)) return false
  }

  return true
}

export const tokenUSDRate = ({
  hardCap,
  totalSell,
  hardCapDecimal = 18,
  totalRaiseDecimal = 18,
  tokenSymbol,
  paymentSymbol
}: {
  hardCap: string
  totalSell: string
  hardCapDecimal: number
  totalRaiseDecimal: number
  tokenSymbol: string
  paymentSymbol: string
}) => {
  const hardCapConvert = formatUnits(BigInt(hardCap), hardCapDecimal)
  const totalSellConvert = formatUnits(BigInt(totalSell), totalRaiseDecimal)

  const rate = convertFixed2Amount(Number(hardCapConvert) / Number(totalSellConvert), 2)

  const pricePerText = `1 (${tokenSymbol}) = ${rate} (${paymentSymbol})`

  return pricePerText
}

export const renderContractError = (error: string | undefined | null) => {
  const errorMapping = contractErrors.find((item) => error && error.toLowerCase().includes(item.toLowerCase()))

  return errorMapping ? toCapitalizeFirstLetter(errorMapping) : "The Request Was Rejected."
}
