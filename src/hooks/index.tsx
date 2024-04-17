import { useEffect } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { getAccountInfo } from "src/apis/account"
import { routesName } from "src/const/routes"
import { AccountRole, AccountType } from "src/types/account"
import { useModal } from "src/utils/ModalContext"
import { useAccount, useContractWrite, useWaitForTransaction } from "wagmi"
import faucetAbi from "src/abis/Faucet.json"
import { VITE_FAUCET_CONTRACT_ADDRESS } from "src/const/env"

export const useCheckAdmin = () => {
  const { pathname } = useLocation()
  const { handleAccountConnect } = useModal()
  const navigate = useNavigate()
  const walletAccount = useAccount()
  useScrollToTop()

  async function signIn() {
    const access_token = localStorage.getItem("access_token")

    if (!access_token) {
      if (pathname.includes("admin")) {
        navigate(routesName.ROOT)
      }

      return
    }

    if (!walletAccount.isConnected) {
      localStorage.removeItem("access_token")
      localStorage.removeItem("confirmUuids")
      if (pathname.includes("admin")) {
        navigate(routesName.ROOT)
      } else window.location.reload()

      return
    }

    getAccountInfo({ access_token: JSON.parse(access_token) }).then(async (res) => {
      if (res.ok) {
        const userInfoDataJSON: { data: AccountType } = await res.json()
        handleAccountConnect(userInfoDataJSON.data)

        if (pathname.includes("admin") && userInfoDataJSON.data.role !== AccountRole.ADMIN) {
          navigate(routesName.ROOT)
        }
      } else {
        if (pathname.includes("admin")) {
          navigate(routesName.ROOT)
        }
      }
    })
  }

  useEffect(() => {
    signIn()
  }, [])
}

export const useScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [pathname])
}

export const useFaucet = () => {
  const {
    data,
    write,
    isLoading: isLoadingConfig,
    isError: isErrorUser,
    error
  } = useContractWrite({
    address: VITE_FAUCET_CONTRACT_ADDRESS,
    abi: faucetAbi.abi,
    functionName: "drip"
  })
  const {
    isLoading: isLoaingTxh,
    isSuccess,
    isError
  } = useWaitForTransaction({
    hash: data?.hash
  })

  useEffect(() => {
    if (isSuccess) {
      toast.success(
        <div>
          Faucet Successful!{" "}
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
    } else if (isError || isErrorUser) {
      const msg = String(error).includes("The Request Was Rejected.")
      toast.error(msg)
    }
  }, [data?.hash, error, isError, isErrorUser, isSuccess])

  return {
    faucet: write,
    isLoading: isLoaingTxh || isLoadingConfig
  }
}
