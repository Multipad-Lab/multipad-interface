import { useEffect, useMemo, useState } from "react"
import { checkWhiteList } from "src/apis/launchpad/whiteList"
import { useAccount } from "wagmi"

export const useCheckWhiteList = ({ id, isComunity }: { id: string; isComunity: boolean }) => {
  const account = useAccount()
  const [isWhiteList, setIsWhiteList] = useState(false)

  useEffect(() => {
    if (account.address && id && isComunity) {
      checkWhiteList({ launchpad: id, userAddress: account.address.toLocaleLowerCase() as string }).then((res) => {
        setIsWhiteList(res.data)
      })
    }
  }, [account.address, id, isComunity])

  return useMemo(() => {
    return { isWhiteList }
  }, [isWhiteList])
}
