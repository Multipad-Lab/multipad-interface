import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProject } from "src/apis/admin"
import { initForm, paymentList } from "src/const/admin-project-details"
import { AdminProjectFormType, AdminProjectResponseType } from "src/types/adminProjectList"
import { useChainId, useToken } from "wagmi"

export const useForm = () => {
  const [form, setForm] = useState<AdminProjectFormType>(initForm)
  const [formInit, setFormInit] = useState<AdminProjectResponseType>()
  const { id } = useParams()
  const [loadingInit, setLoadingInit] = useState(false)
  const [refetchDataFlag, setRefetchDataFlag] = useState(false)
  const chainId = useChainId()
  const result = useToken({ address: form.tokenAddress as "0x${string}", enabled: !!form.tokenAddress, chainId })

  const handleRefetchData = () => {
    setRefetchDataFlag(!refetchDataFlag)
  }

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

  useEffect(() => {
    if (id) {
      setLoadingInit(true)

      getProject({ uuid: id })
        .then(async (res) => {
          if (res.ok) {
            const dataJSON: { data: AdminProjectResponseType } = await res.json()
            const data: AdminProjectResponseType = dataJSON.data
            const newForm = {
              name: data.name,
              logoUrl: data.logoUrl,
              backgroundUrl: data.backgroundUrl,
              images: data.images.join("\n"),
              description: data.description,
              fulltextInfoProject: data.fulltextInfoProject,
              website: data.website,
              telegram: data.telegram,
              twitter: data.twitter,
              ownerAddress: data.ownerAddress,
              tokenAddress: data.tokenAddress,
              paymentAddress: data.paymentAddress || initForm.paymentAddress,
              chain: String(data.chain),
              tokenSymbol: data.tokenSymbol,
              paymentSymbol: data.paymentSymbol || initForm.paymentSymbol,
              tokenDecimal: data.tokenDecimal,
              paymentDecimal: data.paymentDecimal || initForm.paymentDecimal,
              label: data.label,
              totalSupply: String(data.totalSupply),
              status: data.status
            }

            setForm(newForm)
            setFormInit(data)
          }
        })
        .finally(() => setLoadingInit(false))
    }
  }, [id, refetchDataFlag])

  return {
    formInit,
    loadingInit,
    form,
    handleChangeForm,
    handleRefetchData
  }
}
