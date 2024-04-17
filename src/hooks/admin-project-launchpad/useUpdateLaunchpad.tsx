import { useCallback, useEffect, useMemo, useState } from "react"
import { toast } from "react-toastify"
import { AdminLaunchpadFormType } from "src/types/adminLaunchpadList"
import { useContractWrite, useNetwork, useWaitForTransaction } from "wagmi"
import guaranteedAbi from "src/abis/GuaranteedLaunchpad.json"
import communityAbi from "src/abis/CommunityLaunchpad.json"
import fcfsAbi from "src/abis/FCFSLaunchpad.json"
import { AdminProjectResponseType } from "src/types/adminProjectList"
import { Link } from "react-router-dom"
import { createLaunchpad } from "src/apis/launchpad/createLaunchpad"
import { LaunchpadItemType, LaunchpadType } from "src/types/viiewPool"
import { parseUnits } from "viem"
import { LaunchpadStatus } from "src/types/userLaunchpadList"
import { LaunchpadOnChainType } from "./useLaunchpadDataOnChain"
import { renderContractError, toCapitalizeFirstLetter } from "src/utils/commons"

export const useUpdateLaunchpad = (
  formInput: AdminLaunchpadFormType,
  handleAfterSubmitForm: () => void,
  projectData?: AdminProjectResponseType,
  launchpadDataOnChain?: LaunchpadOnChainType,
  launchpadDataApi?: LaunchpadItemType
) => {
  const [isLoading, setIsLoading] = useState(false)

  let form: AdminLaunchpadFormType = {
    ...formInput,
    chain: Number(formInput.chain)
  }
  Object.keys(form).forEach((field: any) => {
    if (typeof form[field as keyof AdminLaunchpadFormType] === "string") {
      form = { ...form, [field]: String(form[field as keyof AdminLaunchpadFormType]).trim() }
    }
  })

  const { chain } = useNetwork()

  const {
    data,
    write,
    isLoading: isLoadingConfig,
    isError: isErrorUser,
    error: errorUpdate
  } = useContractWrite({
    address: launchpadDataApi?.contractAddress as `0x${string}`,
    abi:
      formInput.type === LaunchpadType.GUARANTEED
        ? guaranteedAbi.abi
        : formInput.type === LaunchpadType.COMMUNITY
          ? communityAbi.abi
          : fcfsAbi.abi,
    functionName: formInput.type === LaunchpadType.GUARANTEED ? "guaranteedLaunchpadConfig" : "launchpadConfig"
  })
  const {
    isLoading: isLoaingTxh,
    isSuccess,
    isError,
    error
  } = useWaitForTransaction({
    hash: data?.hash
  })

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        setIsLoading(false)
        toast.success(
          <div>
            Update Launchpad Successful!{" "}
            {data?.hash ? (
              <>
                Transaction:{" "}
                <Link
                  style={{ color: "white", textDecoration: "underline" }}
                  target='_blank'
                  to={`https://testnet.bscscan.com/tx/${data.hash}`}
                >
                  {data?.hash}
                </Link>
              </>
            ) : null}
          </div>
        )
        handleAfterSubmitForm()
      }, 5000)
    } else if (isError || isErrorUser) {
      setIsLoading(false)
      toast.error(renderContractError(errorUpdate?.message || error?.message))
    }
  }, [isSuccess, isError, isErrorUser])

  const handleUpdateLaunchpad = useCallback(
    async (isCancel?: boolean) => {
      if (!chain?.id) return

      setIsLoading(true)
      try {
        const args = [
          isCancel ? LaunchpadStatus.CANCELLED : launchpadDataOnChain?.launchpadStatus,
          Math.round(form.startAt / 1000), //start_time
          Math.round(form.endAt / 1000), //end_time
          projectData?.tokenAddress, // sell token "0xe21e55CC01a183A57C70557B92D641Bc24716B30",
          projectData?.paymentAddress, // buy token (USDT /BNB) "0xD47154745a3F7D4138E9C98442ede54A4541032C",
          String(parseUnits(form.totalRaise, Number(projectData?.tokenDecimal))), // total sell * decimal sell token,
          ...(formInput.type !== LaunchpadType.GUARANTEED
            ? [
                String(parseUnits(form.minBuy, Number(projectData?.paymentDecimal))), // minBuy
                String(parseUnits(form.maxBuy, Number(projectData?.paymentDecimal))) // maxBuy
              ]
            : []),
          String(parseUnits(form.softCap, Number(projectData?.paymentDecimal))), // softcap token * decimal buy token,
          String(parseUnits(form.hardCap, Number(projectData?.paymentDecimal))), // hartcap token * decimal buy token,
          form.vestingEnable === 1 ? true : false, // vestingEnable
          Number(form.tgeRate), // % TGE rate
          Number(form.cliffTime), // cliff Time (months)
          Number(form.linearTime), // linear Time (months)
          Number(form.vestingDelay) // vesting delay (days)
        ]
        if (form.type === LaunchpadType.GUARANTEED) {
          const signatureLaunchpad = await createLaunchpad(chain?.id)

          if (!signatureLaunchpad?.data) return

          write({
            args: [
              ...args,
              // get params from api: 1.total members, 2.pool Weight, 3.signTime, 4.signature
              signatureLaunchpad.data.data.countUsers, // total members
              signatureLaunchpad.data.data.arrayTier, // pool Weight
              signatureLaunchpad.data.data.timestamp, // signTime
              signatureLaunchpad.data.signature // signature
            ]
          })
        } else {
          write({
            args: args
          })
        }
      } catch (error: any) {
        setIsLoading(false)

        toast.error(toCapitalizeFirstLetter(error.message[0] || "Something is wrong!"))
      }
    },
    [write, form, projectData, chain]
  )

  return useMemo(() => {
    return {
      isLoading: isLoaingTxh || isLoadingConfig || isLoading,
      isSuccess,
      isErrorUser: isError || isErrorUser,
      updateLaunchpad: handleUpdateLaunchpad
    }
  }, [isLoaingTxh, isLoadingConfig, isLoading, isSuccess, isError, isErrorUser, handleUpdateLaunchpad])
}
