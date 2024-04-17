import { useContractWrite, useWaitForTransaction } from "wagmi"
import myTokenContract from "src/abis/myToken.json"
import { toast } from "react-toastify"
import { useEffect } from "react"
import { AdminProjectResponseType, DataOnChainType } from "src/types/adminProjectList"
import { LaunchpadItemType } from "src/types/viiewPool"
import { parseUnits } from "viem"
import { renderContractError } from "src/utils/commons"

export const useApprove = ({
  data,
  quantity
}: {
  data: { launchpad: LaunchpadItemType; projectData: AdminProjectResponseType; dataOnChain: DataOnChainType }
  quantity: string
}) => {
  const {
    isLoading: isLoadingApprove,
    data: approveData,
    isError: isErrorApprove,
    error: errorApprove,
    write: approveWrite
  } = useContractWrite({
    address: data.projectData.paymentAddress as `0x${string}`, //
    abi: myTokenContract.abi,
    functionName: "approve",
    args: [
      data.launchpad.contractAddress,
      parseUnits(quantity, Number(data.projectData.paymentDecimal)) //
    ]
  })

  const { isLoading, isSuccess, isError, error } = useWaitForTransaction({
    hash: approveData?.hash
  })

  useEffect(() => {
    if (isSuccess) {
      data?.dataOnChain?.refetch()
      toast.success("Approve Successful!")
    } else if (isError || isErrorApprove) {
      toast.error(renderContractError(errorApprove?.message || error?.message))
    }
  }, [isSuccess, isError, isErrorApprove])

  const handleApprove = () => {
    approveWrite && approveWrite()
  }

  return {
    onApprove: handleApprove,
    isLoadingApprove: isLoadingApprove || isLoading,
    isSuccessApprove: isSuccess
  }
}
