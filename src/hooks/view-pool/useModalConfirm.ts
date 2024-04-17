import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { routesName } from "src/const/routes"
import { routeTo } from "src/utils/services/routes"

export const useModalConfirm = () => {
  const [confirmViewPool, setConfirmViewPool] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()

  const handleBackToProjectDetail = () => {
    navigate(routeTo(`${routesName.PROJECT_DETAILS}`, { id }))
  }

  const handleShowPool = () => {
    setConfirmViewPool(false)
    localStorage.setItem("isConfirmed", JSON.stringify(true))
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  useEffect(() => {
    const localConfirmed = localStorage.getItem("isConfirmed")

    if (!localConfirmed) setConfirmViewPool(true)
  }, [])

  return {
    confirmViewPool,
    handleBackToProjectDetail,
    handleShowPool
  }
}
