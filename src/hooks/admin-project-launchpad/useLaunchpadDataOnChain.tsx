import { Address, useContractReads } from "wagmi"
import { LaunchpadItemType, LaunchpadType } from "src/types/viiewPool"
import guaranteedLaunchpad from "src/abis/GuaranteedLaunchpad.json"
import CommunityLaunchpad from "src/abis/CommunityLaunchpad.json"
import FCFSLaunchpad from "src/abis/FCFSLaunchpad.json"
import { LaunchpadStatus } from "src/types/userLaunchpadList"
import { useMemo } from "react"

export type LaunchpadOnChainType = {
  buyToken: string
  endTime: bigint
  hardCap: bigint
  launchpadStatus: LaunchpadStatus
  launchpadType: LaunchpadType
  maxBuy: bigint
  minBuy: bigint
  projectId: string
  sellToken: string
  softCap: bigint
  startTime: bigint
  totalRaise: bigint
  totalSell: bigint
  cliffTime: number
  linearTime: number
  tgeRate: number
  vestingEnable: boolean
  vestingTime: bigint
  vestingDelay: number
}

export const useLaunchpadDataOnChain = ({ launchpad }: { launchpad?: LaunchpadItemType }) => {
  const {
    data: contractData,
    refetch,
    isLoading
  } = useContractReads({
    contracts: [
      {
        address: launchpad?.contractAddress as Address,
        abi: (launchpad?.type === LaunchpadType.GUARANTEED
          ? guaranteedLaunchpad.abi
          : launchpad?.type === LaunchpadType.COMMUNITY
            ? CommunityLaunchpad.abi
            : FCFSLaunchpad.abi) as any,
        functionName: "launchpadInformation"
      }
    ]
  })

  const launchpadDataOnChain: LaunchpadOnChainType =
    contractData?.[0]?.status === "success" ? contractData?.[0]?.result?.[0] : undefined
  const launchpadVestingDataOnChain: LaunchpadOnChainType =
    contractData?.[0]?.status === "success" ? contractData?.[0]?.result?.[1] : undefined

  return useMemo(() => {
    return {
      launchpadDataOnChain:
        contractData?.[0]?.status === "success"
          ? { ...launchpadDataOnChain, ...launchpadVestingDataOnChain }
          : undefined,
      isLoading,
      refetch
    }
  }, [isLoading, launchpadDataOnChain, launchpadVestingDataOnChain, refetch])
}
