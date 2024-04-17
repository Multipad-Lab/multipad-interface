import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { createProject } from "src/apis/admin"
import { routesName } from "src/const/routes"
import { AdminProjectFormType, AdminProjectRequestType } from "src/types/adminProjectList"
import { toCapitalizeFirstLetter } from "src/utils/commons"
import { routeTo } from "src/utils/services/routes"

export const useSubmit = ({ form }: { form: AdminProjectFormType }) => {
  const [loadingSubmit, setLoadingSubmit] = useState(false)
  const navigate = useNavigate()

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
    createProject({ body })
      .then(() => {
        navigate(routeTo(routesName.ADMIN_PROJECTS))
        toast.success("Create Project Successful!")
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
