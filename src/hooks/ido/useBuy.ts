import { useContractWrite, useWaitForTransaction } from "wagmi"
import guaranteedLaunchpad from "src/abis/GuaranteedLaunchpad.json"
import CommunityLaunchpad from "src/abis/CommunityLaunchpad.json"
import FCFSLaunchpad from "src/abis/FCFSLaunchpad.json"
import { useEffect } from "react"
import { toast } from "react-toastify"
import { AdminProjectResponseType } from "src/types/adminProjectList"
import { LaunchpadItemType, LaunchpadType, SignatureResponse } from "src/types/viiewPool"
import { renderContractError } from "src/utils/commons"

export const useBuy = ({
  data,
  refetch
}: {
  data: {
    launchpad: LaunchpadItemType
    projectData: AdminProjectResponseType
  }
  refetch: () => void
}) => {
  const {
    isLoading: isLoadingBuy,
    data: buyData,
    isError: isErrorBuy,
    error: errorBuy,
    write: buyWrite
  } = useContractWrite({
    address: data.launchpad.contractAddress as any,
    abi:
      data.launchpad.type === LaunchpadType.GUARANTEED
        ? guaranteedLaunchpad.abi
        : data.launchpad.type === LaunchpadType.COMMUNITY
          ? CommunityLaunchpad.abi
          : FCFSLaunchpad.abi,
    functionName: "purchaseToken"
  })

  const { isLoading, isSuccess, isError, error } = useWaitForTransaction({
    hash: buyData?.hash
  })

  useEffect(() => {
    if (isSuccess) {
      refetch()
      toast.success("Buy Successful!")
    } else if (isError || isErrorBuy) {
      toast.error(renderContractError(errorBuy?.message || error?.message))
    }
  }, [isSuccess, isError, isErrorBuy])

  const handleBuy = (params: SignatureResponse) => {
    buyWrite &&
      buyWrite({
        args:
          data.launchpad.type === LaunchpadType.GUARANTEED
            ? [params.data.tier, params.data.timestamp, params.signature]
            : data.launchpad.type === LaunchpadType.COMMUNITY
              ? [params.data.isWhitelist, params.data.amount, params.data.timestamp, params.signature]
              : [params.data.amount] // FCFS
      })
  }

  return {
    onBuy: handleBuy,
    isLoadingBuy: isLoadingBuy || isLoading,
    isSuccessBuy: isSuccess
  }
}
