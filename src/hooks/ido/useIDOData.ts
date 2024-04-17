import { Address, useAccount, useContractReads } from "wagmi"
import myTokenContract from "src/abis/myToken.json"
import { LaunchpadItemType, LaunchpadType } from "src/types/viiewPool"
import { AdminProjectResponseType } from "src/types/adminProjectList"
import { useModal } from "src/utils/ModalContext"
import guaranteedLaunchpad from "src/abis/GuaranteedLaunchpad.json"
import CommunityLaunchpad from "src/abis/CommunityLaunchpad.json"
import FCFSLaunchpad from "src/abis/FCFSLaunchpad.json"
import { formatEther, formatUnits } from "viem"

export const useIDOData = ({
  data
}: {
  data: { launchpad: LaunchpadItemType; projectData?: AdminProjectResponseType }
}) => {
  const { address } = useAccount()
  const { account } = useModal()

  const myTokenContractWagmi = {
    address: data.launchpad.paymentAddress as Address,
    abi: myTokenContract.abi as any
  }

  const launchpadContract = {
    address: data.launchpad.contractAddress as Address,
    abi: (data.launchpad.type === LaunchpadType.GUARANTEED
      ? guaranteedLaunchpad.abi
      : data.launchpad.type === LaunchpadType.COMMUNITY
        ? CommunityLaunchpad.abi
        : FCFSLaunchpad.abi) as any
  }

  const { data: contractData, refetch } = useContractReads({
    contracts: [
      {
        ...myTokenContractWagmi,
        functionName: "balanceOf",
        args: [address]
      },
      {
        ...myTokenContractWagmi,
        functionName: "allowance",
        args: [address, data.launchpad.contractAddress as Address]
      },
      {
        ...launchpadContract,
        functionName: "launchpadInformation"
      },
      {
        ...launchpadContract,
        functionName: "buyAmountOfTier",
        args: [account?.tier]
      },
      {
        ...launchpadContract,
        functionName: "buyerInformation",
        args: [address]
      }
    ]
  })
  const balanceOf = contractData?.[0]?.status === "success" ? Number(contractData?.[0]?.result) : 0
  const balance =
    contractData?.[0]?.status === "success"
      ? Number(
          formatUnits(contractData?.[0]?.result as unknown as bigint, Number(data.projectData?.paymentDecimal || 18))
        )
      : 0
  const allowance = (contractData?.[1]?.status === "success" ? contractData?.[1]?.result : 0n) as bigint
  const launchpadStatus =
    contractData?.[2]?.status === "success" ? contractData?.[2]?.result?.[0]?.launchpadStatus : undefined
  const totalRaised = contractData?.[2]?.status === "success" ? contractData?.[2]?.result?.[0]?.totalRaise : 0
  const hardCap = contractData?.[2]?.status === "success" ? contractData?.[2]?.result?.[0]?.hardCap : 0
  const vestingDelay = contractData?.[2]?.status === "success" ? contractData?.[2]?.result?.[1]?.vestingDelay : 0

  const buyAmountOfTier = (contractData?.[3]?.status === "success" ? contractData?.[3]?.result : 0n) as bigint
  const withdrawAmount =
    contractData?.[4]?.status === "success" ? Number((contractData?.[4]?.result as any)?.withdrawAmount) : 0
  const receiveAmount =
    contractData?.[4]?.status === "success" ? Number((contractData?.[4]?.result as any)?.receiveAmount) : 0
  const vestedAmount =
    contractData?.[4]?.status === "success" ? Number((contractData?.[4]?.result as any)?.vestedAmount) : 0
  const purchaseAmount =
    contractData?.[4]?.status === "success" ? Number((contractData?.[4]?.result as any)?.purchaseAmount) : 0
  const refundAmount =
    contractData?.[4]?.status === "success" ? Number((contractData?.[4]?.result as any)?.refundAmount) : 0
  const vestingStep =
    contractData?.[4]?.status === "success" ? Number((contractData?.[4]?.result as any)?.vestingStep) : 0
  const vestingTime =
    contractData?.[4]?.status === "success" ? Number((contractData?.[4]?.result as any)?.vestingTime) : 0

  return {
    totalRaised,
    hardCap,
    purchaseAmount,
    purchaseAmountFormatted: formatEther(BigInt(purchaseAmount)),
    receiveAmount,
    vestedAmount,
    withdrawAmount,
    buyAmountOfTier,
    launchpadStatus,
    balance,
    balanceOf,
    allowance,
    vestingDelay,
    refundAmount,
    vestingStep,
    vestingTime,
    refetch
  }
}
