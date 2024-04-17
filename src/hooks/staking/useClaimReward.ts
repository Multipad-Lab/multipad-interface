import { useContractWrite, useWaitForTransaction } from "wagmi"
import multipadStaking from "src/abis/multipadStaking.json"
import { useEffect } from "react"
import { toast } from "react-toastify"
import { HistoryStake } from "src/apis/stake/getHistoryStake"
import { renderContractError } from "src/utils/commons"

export const useClaimReward = ({ history }: { history: HistoryStake }) => {
  const {
    data: claimRewardData,
    write: claimRewardWrite,
    isLoading: isLoadingClaimReward,
    isError: isErrorClaimReward,
    error: errorClaimReward
  } = useContractWrite({
    address: history.stakeContract,
    abi: multipadStaking.abi,
    functionName: "claimReward",
    args: [history.idOnChain]
  })

  const { isLoading, isSuccess, isError, error } = useWaitForTransaction({
    hash: claimRewardData?.hash
  })

  useEffect(() => {
    if (isSuccess) {
      toast.success("Claim Reward Successful!")
    } else if (isError || isErrorClaimReward) {
      toast.error(renderContractError(errorClaimReward?.message || error?.message))
    }
  }, [isSuccess, isError, isErrorClaimReward])

  return {
    onClaimRewardWrite: claimRewardWrite,
    isLoadingClaimReward: isLoadingClaimReward || isLoading,
    isSuccessClaimReward: isSuccess
  }
}
