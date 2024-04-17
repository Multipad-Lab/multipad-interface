import { useContractWrite, useWaitForTransaction } from "wagmi"
import { StakeFilter } from "src/apis/stake/getStakeFilter"
import { TOKEN_DECIMAL } from "src/const/common"
import multipadStaking from "src/abis/multipadStaking.json"
import { useEffect } from "react"
import { toast } from "react-toastify"
import { renderContractError } from "src/utils/commons"

export const useStake = ({
  stake,
  stakeAmount,
  refetch,
  balance
}: {
  stake: StakeFilter
  stakeAmount: string
  refetch: () => void
  balance?: number
}) => {
  const {
    isLoading: isLoadingStake,
    data: stakeData,
    isError: isErrorStake,
    write: stakeWrite,
    error: errorStake
  } = useContractWrite({
    address: `${stake?.address}` as any,
    abi: multipadStaking.abi,
    functionName: "stake",
    args: [Number(stakeAmount) * TOKEN_DECIMAL, stake?.idOnChain]
  })

  const { isLoading, isSuccess, isError, error } = useWaitForTransaction({
    hash: stakeData?.hash
  })

  useEffect(() => {
    if (isSuccess) {
      refetch()
      toast.success("Stake Successful!")
    } else if (isError || isErrorStake) {
      if (balance && balance <= +stakeAmount) {
        toast.error("insufficient balance, please refill your account")
      } else {
        toast.error(renderContractError(errorStake?.message || error?.message))
      }
    }
  }, [isSuccess, isError, isErrorStake])

  const handleStake = () => {
    stakeWrite()
  }

  return {
    onStake: handleStake,
    isLoadingStake: isLoadingStake || isLoading,
    isSuccessStake: isSuccess
  }
}
