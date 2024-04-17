import { useEffect, useMemo, useState } from "react"
import { initForm } from "src/const/admin-project-launchpad"
import { AdminLaunchpadFormType } from "src/types/adminLaunchpadList"
import { AdminProjectResponseType } from "src/types/adminProjectList"
import { LaunchpadItemType, LaunchpadType } from "src/types/viiewPool"
import { useLaunchpadDataOnChain } from "./useLaunchpadDataOnChain"
import { formatUnits } from "viem"

export const useForm = ({
  launchpad,
  projectData,
  launchpadList
}: {
  launchpad?: LaunchpadItemType
  projectData?: AdminProjectResponseType
  launchpadList: LaunchpadItemType[]
}) => {
  const [form, setForm] = useState<AdminLaunchpadFormType>(initForm)

  const { launchpadDataOnChain, isLoading } = useLaunchpadDataOnChain({ launchpad })
  const handleChangeForm = ({
    field,
    value
  }: {
    field: keyof AdminLaunchpadFormType
    value: AdminLaunchpadFormType[keyof AdminLaunchpadFormType]
  }) => {
    setForm((prev) => ({
      ...prev,
      [field]: value
    }))
  }

  useEffect(() => {
    if (launchpad && launchpadDataOnChain) {
      setForm({
        contractAddress: launchpad.contractAddress,
        chain: launchpad.chain,
        type: launchpadDataOnChain.launchpadType,
        minBuy: String(formatUnits(launchpadDataOnChain.minBuy, Number(projectData?.paymentDecimal || 18))),
        maxBuy: String(formatUnits(launchpadDataOnChain.maxBuy, Number(projectData?.paymentDecimal || 18))),
        softCap: String(formatUnits(launchpadDataOnChain.softCap, Number(projectData?.paymentDecimal || 18))),
        hardCap: String(formatUnits(launchpadDataOnChain.hardCap, Number(projectData?.paymentDecimal || 18))),
        startAt: Number(launchpadDataOnChain.startTime) * 1000,
        endAt: Number(launchpadDataOnChain.endTime) * 1000,
        claimAt: launchpad.claimAt * 1000,
        totalRaise: String(formatUnits(launchpadDataOnChain.totalSell, Number(projectData?.tokenDecimal || 18))),
        cliffTime: String(launchpadDataOnChain.cliffTime),
        tgeRate: String(launchpadDataOnChain.tgeRate),
        linearTime: String(launchpadDataOnChain.linearTime),
        vestingEnable: launchpadDataOnChain.vestingEnable ? 1 : 0,
        vestingDelay: String(launchpadDataOnChain.vestingDelay)
      })
    } else {
      const hasGuaranteed = launchpadList.find((item) => item.type === LaunchpadType.GUARANTEED)
      const hasCommunity = launchpadList.find((item) => item.type === LaunchpadType.COMMUNITY)
      setForm({
        ...initForm,
        ...(!hasGuaranteed && { type: LaunchpadType.GUARANTEED }),
        ...(!hasCommunity && hasGuaranteed && { type: LaunchpadType.COMMUNITY }),
        ...(hasCommunity && hasGuaranteed && { type: LaunchpadType.FCFS })
      })
    }
  }, [launchpad, launchpadDataOnChain])

  return useMemo(() => {
    return {
      form,
      loadingInit: isLoading,
      launchpadDataOnChain,
      handleChangeForm
    }
  }, [form, isLoading, launchpadDataOnChain])
}
