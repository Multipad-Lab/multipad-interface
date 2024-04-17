import { AdminProjectResponseType } from "src/types/adminProjectList"
import { LaunchpadItemType } from "src/types/viiewPool"
import { formatUnits } from "viem"

export const useConst = ({
  data
}: {
  data: { launchpad: LaunchpadItemType; projectData: AdminProjectResponseType }
}) => {
  const minBuy = +formatUnits(BigInt(data.launchpad.minBuy), Number(data.projectData.paymentDecimal))
  const maxBuy = +formatUnits(BigInt(data.launchpad.maxBuy), Number(data.projectData.paymentDecimal))
  const softCap = +formatUnits(BigInt(data.launchpad.softCap), Number(data.projectData.paymentDecimal))
  const hardCap = +formatUnits(BigInt(data.launchpad.hardCap), Number(data.projectData.paymentDecimal))

  return {
    maxBuy,
    minBuy,
    hardCap,
    softCap
  }
}
