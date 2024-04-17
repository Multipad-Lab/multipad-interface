import { useEffect, useState } from "react"
import { initForm, paymentList } from "src/const/admin-project-details"
import { AdminProjectFormType } from "src/types/adminProjectList"
import { useChainId, useToken } from "wagmi"

export const useForm = () => {
  const [form, setForm] = useState<AdminProjectFormType>(initForm)
  const chainId = useChainId()
  const result = useToken({ address: form.tokenAddress as "0x${string}", enabled: !!form.tokenAddress, chainId })

  const handleChangeForm = ({
    field,
    value
  }: {
    field: keyof AdminProjectFormType
    value: AdminProjectFormType[keyof AdminProjectFormType]
  }) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
      ...(field === "paymentSymbol" && {
        paymentAddress: paymentList.find((item) => item.symbol === value)?.address,
        paymentDecimal: paymentList.find((item) => item.symbol === value)?.decimal
      })
    }))
  }

  useEffect(() => {
    if (result?.data?.symbol && form.tokenAddress && !result?.isError) {
      setForm((prev) => ({
        ...prev,
        tokenSymbol: result?.data?.symbol || "",
        tokenDecimal: result?.data?.decimals || 18
      }))
    } else if (result?.isError && form.tokenAddress)
      setForm((prev) => ({
        ...prev,
        tokenSymbol: "",
        tokenDecimal: ""
      }))
  }, [result?.data, result?.isError])

  return {
    form,
    handleChangeForm
  }
}
