import { AdminLaunchpadFormType, notRequiredFields } from "src/types/adminLaunchpadList"
import { useCreateLaunchpad } from "./useCreateLaunchpad"
import { AdminProjectResponseType } from "src/types/adminProjectList"
import { toast } from "react-toastify"
import dayjs from "dayjs"
import { LaunchpadItemType, LaunchpadType } from "src/types/viiewPool"
import { LaunchpadOnChainType } from "./useLaunchpadDataOnChain"
import { LaunchpadStatus } from "src/types/userLaunchpadList"
import { useUpdateLaunchpad } from "./useUpdateLaunchpad"

export const useSubmit = ({
  form,
  projectData,
  launchpadDataOnChain,
  launchpadDataApi,
  handleAfterSubmitForm
}: {
  form: AdminLaunchpadFormType
  projectData?: AdminProjectResponseType
  launchpadDataOnChain?: LaunchpadOnChainType
  launchpadDataApi?: LaunchpadItemType
  handleAfterSubmitForm: () => void
}) => {
  const { isLoading, createLaunchpad } = useCreateLaunchpad(form, handleAfterSubmitForm, projectData)
  const { isLoading: isLoadingUpdate, updateLaunchpad } = useUpdateLaunchpad(
    form,
    handleAfterSubmitForm,
    projectData,
    launchpadDataOnChain,
    launchpadDataApi
  )

  const handleSubmit = (e: any, isCancel?: boolean) => {
    e.preventDefault()

    if (form.type === LaunchpadType.GUARANTEED) {
      notRequiredFields.push("minBuy", "maxBuy")
    }

    const hasBlankField = Object.keys(form).filter(
      (key) => !form[key as keyof AdminLaunchpadFormType] && !notRequiredFields.includes(key)
    )

    if (hasBlankField.length && !isCancel) {
      return toast.error("Please enter all input!")
    }
    const invalidStartTime = form.startAt && form.startAt < dayjs().valueOf()

    if (
      invalidStartTime &&
      (!launchpadDataOnChain || launchpadDataOnChain.launchpadStatus === LaunchpadStatus.PENDING) &&
      !isCancel
    ) {
      return toast.error("Please Select A Future Time!")
    }

    const isInvalidStartEndTime = form.startAt && form.endAt && form.endAt < form.startAt

    if (isInvalidStartEndTime && !isCancel) {
      return toast.error("The End Time must be after The Start Time!")
    }

    const isInvalidMaxMinBuy = form.minBuy && form.maxBuy && Number(form.maxBuy) < Number(form.minBuy)

    if (isInvalidMaxMinBuy && !isCancel) {
      return toast.error("The Max Buy must be greater than The Min Buy!")
    }

    const isInvalidSoftHardCap = form.softCap && form.hardCap && Number(form.hardCap) < Number(form.softCap)

    if (isInvalidSoftHardCap && !isCancel) {
      return toast.error("The Hard Cap must be greater than The Soft Cap!")
    }

    if (launchpadDataOnChain) {
      updateLaunchpad(isCancel)
    } else {
      createLaunchpad()
    }
  }

  return {
    handleSubmit,
    loadingSubmit: isLoading || isLoadingUpdate
  }
}
