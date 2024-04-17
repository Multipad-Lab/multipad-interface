import { useContractWrite, useWaitForTransaction } from "wagmi"
import guaranteedLaunchpad from "src/abis/GuaranteedLaunchpad.json"
import CommunityLaunchpad from "src/abis/CommunityLaunchpad.json"
import FCFSLaunchpad from "src/abis/FCFSLaunchpad.json"
import { useEffect } from "react"
import { toast } from "react-toastify"
import { LaunchpadItemType, LaunchpadType } from "src/types/viiewPool"
import { AdminProjectResponseType, DataOnChainType } from "src/types/adminProjectList"
import { renderContractError } from "src/utils/commons"

export const useRefund = ({
  data
}: {
  data: { launchpad: LaunchpadItemType; projectData: AdminProjectResponseType; dataOnChain: DataOnChainType }
}) => {
  const {
    isLoading: isLoadingRefund,
    data: refundData,
    isError: isErrorRefund,
    error: errorRefund,
    write: refundWrite
  } = useContractWrite({
    address: data.launchpad.contractAddress as any,
    abi:
      data.launchpad.type === LaunchpadType.GUARANTEED
        ? guaranteedLaunchpad.abi
        : data.launchpad.type === LaunchpadType.COMMUNITY
          ? CommunityLaunchpad.abi
          : FCFSLaunchpad.abi,
    functionName: "refundToken"
  })

  const { isLoading, isSuccess, isError, error } = useWaitForTransaction({
    hash: refundData?.hash
  })

  useEffect(() => {
    if (isSuccess) {
      data?.dataOnChain?.refetch()
      toast.success("Refund Successful!")
    } else if (isError || isErrorRefund) {
      toast.error(renderContractError(errorRefund?.message || error?.message))
    }
  }, [isSuccess, isError, isErrorRefund])

  const handleRefund = () => {
    refundWrite()
  }

  return {
    onRefund: handleRefund,
    isLoadingRefund: isLoadingRefund || isLoading,
    isSuccessRefund: isSuccess
  }
}
