import { useContractWrite, useWaitForTransaction } from "wagmi"
import myTokenContract from "src/abis/myToken.json"
import { StakeFilter } from "src/apis/stake/getStakeFilter"
import { toast } from "react-toastify"
import { useEffect } from "react"
import { renderContractError } from "src/utils/commons"

export const useApprove = ({
  stake,
  refetch,
  balanceOf
}: {
  stake: StakeFilter
  refetch: () => void
  balanceOf: number | string
}) => {
  const {
    isLoading: isLoadingApprove,
    data: approveData,
    isError: isErrorApprove,
    write: approveWrite,
    error: errorApprove
  } = useContractWrite({
    address: `${stake?.stakeToken}` as any,
    abi: myTokenContract.abi,
    functionName: "approve",
    args: [stake?.address, balanceOf]
  })

  const { isLoading, isSuccess, isError, error } = useWaitForTransaction({
    hash: approveData?.hash
  })

  useEffect(() => {
    if (isSuccess) {
      refetch()
      toast.success("Approve Successful!")
    } else if (isError || isErrorApprove) {
      toast.error(renderContractError(errorApprove?.message || error?.message))
    }
  }, [isSuccess, isError, isErrorApprove])

  const handleApprove = () => {
    approveWrite()
  }

  return {
    onApprove: handleApprove,
    isLoadingApprove: isLoadingApprove || isLoading,
    isSuccessApprove: isSuccess
  }
}
