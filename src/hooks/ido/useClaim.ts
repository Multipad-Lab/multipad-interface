import { useContractWrite, useWaitForTransaction } from "wagmi"
import guaranteedLaunchpad from "src/abis/GuaranteedLaunchpad.json"
import CommunityLaunchpad from "src/abis/CommunityLaunchpad.json"
import FCFSLaunchpad from "src/abis/FCFSLaunchpad.json"
import { useEffect } from "react"
import { toast } from "react-toastify"
import { LaunchpadItemType, LaunchpadType } from "src/types/viiewPool"
import { AdminProjectResponseType, DataOnChainType } from "src/types/adminProjectList"
import { renderContractError } from "src/utils/commons"

export const useClaim = ({
  data
}: {
  data: { launchpad: LaunchpadItemType; projectData: AdminProjectResponseType; dataOnChain: DataOnChainType }
}) => {
  const {
    isLoading: isLoadingClaim,
    data: claimData,
    isError: isErrorClaim,
    error: errorClaim,
    write: claimWrite
  } = useContractWrite({
    address: data.launchpad.contractAddress as any,
    abi:
      data.launchpad.type === LaunchpadType.GUARANTEED
        ? guaranteedLaunchpad.abi
        : data.launchpad.type === LaunchpadType.COMMUNITY
          ? CommunityLaunchpad.abi
          : FCFSLaunchpad.abi,
    functionName: "vestingToken"
  })

  const { isLoading, isSuccess, isError, error } = useWaitForTransaction({
    hash: claimData?.hash
  })

  useEffect(() => {
    if (isSuccess) {
      data?.dataOnChain?.refetch()
      toast.success("Claim Successful!")
    } else if (isError || isErrorClaim) {
      toast.error(renderContractError(errorClaim?.message || error?.message))
    }
  }, [isSuccess, isError, isErrorClaim])

  const handleClaim = () => {
    claimWrite()
  }

  return {
    onClaim: handleClaim,
    isLoadingClaim: isLoadingClaim || isLoading,
    isSuccessClaim: isSuccess
  }
}
