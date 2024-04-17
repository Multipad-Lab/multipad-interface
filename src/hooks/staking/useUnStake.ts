import { useContractWrite, useWaitForTransaction } from "wagmi"
import multipadStaking from "src/abis/multipadStaking.json"
import { useEffect } from "react"
import { toast } from "react-toastify"
import { HistoryStake } from "src/apis/stake/getHistoryStake"
import { renderContractError } from "src/utils/commons"

export const useUnStake = ({ history }: { history: HistoryStake }) => {
  const {
    data: unStakeData,
    write: unStakeWrite,
    isLoading: isLoadingUnStake,
    isError: isErrorUnStake,
    error: errorUnStake
  } = useContractWrite({
    address: history.stakeContract,
    abi: multipadStaking.abi,
    functionName: "unstake",
    args: [history.idOnChain]
  })

  const { isLoading, isSuccess, isError, error } = useWaitForTransaction({
    hash: unStakeData?.hash
  })

  useEffect(() => {
    if (isSuccess) {
      toast.success("Unstake Successful!")
    } else if (isError || isErrorUnStake) {
      toast.error(renderContractError(errorUnStake?.message || error?.message))
    }
  }, [isSuccess, isError, isErrorUnStake])

  return {
    onUnStakeWrite: unStakeWrite,
    isLoadingUnStake: isLoadingUnStake || isLoading,
    isSuccessUnStake: isSuccess
  }
}
