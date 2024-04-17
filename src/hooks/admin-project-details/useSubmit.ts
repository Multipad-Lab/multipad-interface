import { useState } from "react"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { updateProject } from "src/apis/admin"
import { AdminProjectFormType, AdminProjectRequestType } from "src/types/adminProjectList"
import { toCapitalizeFirstLetter } from "src/utils/commons"

export const useSubmit = ({
  form,
  handleRefetchData
}: {
  form: AdminProjectFormType
  handleRefetchData: () => void
}) => {
  const [loadingSubmit, setLoadingSubmit] = useState(false)
  const { id } = useParams()

  const handleSubmit = (e: any) => {
    e.preventDefault()

    const hasBlankField = Object.keys(form).filter(
      (key) => !form[key as keyof AdminProjectFormType] && key !== "status"
    )

    if (hasBlankField.length) {
      return toast.error("Please enter all input!")
    }

    let body: AdminProjectRequestType = {
      ...form,
      chain: Number(form.chain),
      tokenDecimal: Number(form.tokenDecimal),
      paymentDecimal: Number(form.paymentDecimal),
      totalSupply: Number(form.totalSupply),
      images: form.images.split("\n").map((image) => image.trim())
    }
    Object.keys(body).forEach((field: any) => {
      if (typeof body[field as keyof AdminProjectRequestType] === "string") {
        body = { ...body, [field]: String(body[field as keyof AdminProjectRequestType]).trim() }
      }
    })

    setLoadingSubmit(true)
    updateProject({ body, uuid: String(id) })
      .then(() => {
        handleRefetchData()
        toast.success("Update Project Successful!")
        window.scrollTo({ top: 0, behavior: "smooth" })
      })
      .finally(() => setLoadingSubmit(false))
      .catch((error: { message: string[] }) => {
        toast.error(toCapitalizeFirstLetter(error.message[0] || "Something is wrong!"))
      })
  }

  return {
    handleSubmit,
    loadingSubmit
  }
}
