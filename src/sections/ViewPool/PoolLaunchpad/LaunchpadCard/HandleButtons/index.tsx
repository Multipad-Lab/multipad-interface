import { LaunchpadItemType, LaunchpadType } from "src/types/viiewPool"
import BuyButton from "./BuyButton/BuyButton"
import { AdminProjectResponseType, DataOnChainType } from "src/types/adminProjectList"
import HandleButtonsStyle from "./HandleButtons.style"
import ClaimButton from "./ClaimButton/ClaimButton"
import RefundButton from "./RefundButton/RefundButton"
import { useModal } from "src/utils/ModalContext"
import { AccountTier } from "src/types/account"
import Button from "src/components/button"
import { LaunchpadStatus } from "src/types/userLaunchpadList"
import { useContext, useEffect, useState } from "react"
import { ViewPoolDetailsContext } from "src/sections/ViewPool/context"
import { useCheckWhiteList } from "src/hooks/view-pool/useCheckWhiteList"
import { add } from "lodash"
import dayjs from "dayjs"

const HandleButtons = ({
  data
}: {
  data: {
    maxBuyAmount: boolean
    launchpad: LaunchpadItemType
    projectData: AdminProjectResponseType
    dataOnChain: DataOnChainType
  }
}) => {
  const {
    allowance,
    launchpadStatus,
    buyAmountOfTier,
    receiveAmount,
    vestedAmount,
    purchaseAmount,
    vestingDelay,
    withdrawAmount,
    vestingStep,
    vestingTime
  } = data.dataOnChain
  const canBuy = launchpadStatus === LaunchpadStatus.ACTIVE && !data.maxBuyAmount
  const canClaim = [LaunchpadStatus.ENDED, LaunchpadStatus.LISTED].includes(launchpadStatus)
  const canRefund = [LaunchpadStatus.ACTIVE, LaunchpadStatus.ENDED, LaunchpadStatus.LISTED].includes(launchpadStatus)
  const { account } = useModal()
  const [heightHandleButtons, setHeightHandleButtons] = useState(0)
  const { changeDataFlag, setChangeDataFlag } = useContext(ViewPoolDetailsContext)
  const { isWhiteList } = useCheckWhiteList({
    id: data.launchpad._id,
    isComunity: data?.launchpad?.type === LaunchpadType.COMMUNITY
  })

  useEffect(() => {
    setChangeDataFlag(!changeDataFlag)
  }, [launchpadStatus, purchaseAmount])

  const isNotGuarantedTier = account?.tier === AccountTier.ZERO && data?.launchpad?.type === LaunchpadType.GUARANTEED
  const isNotWhiteListComnunity = !isWhiteList && data?.launchpad?.type === LaunchpadType.COMMUNITY

  useEffect(() => {
    const buttonGroupEls = document.querySelectorAll(".launchpad-card-button-group")
    let childElementCount = 0

    buttonGroupEls.forEach((el) => {
      if (el.childElementCount > childElementCount) {
        childElementCount = el.childElementCount
      }
    })

    if (childElementCount === 0) {
      setHeightHandleButtons(0)
    }

    if (childElementCount === 1) {
      setHeightHandleButtons(86)
    }

    if (childElementCount === 2) {
      setHeightHandleButtons(172)
    }

    if (childElementCount === 3) {
      setHeightHandleButtons(260)
    }
  }, [changeDataFlag, isNotGuarantedTier, isNotWhiteListComnunity])

  const firstVestingTime = add(data.launchpad.endAt, vestingDelay * 86400) * 1000
  const firstVestingEnded = dayjs().isAfter(dayjs(firstVestingTime))
  const disabledClaim = !firstVestingEnded || (vestingStep > 1 && !dayjs().isAfter(dayjs(vestingTime * 1000)))
  const disabledRefund = data?.launchpad?.type !== LaunchpadType.GUARANTEED && launchpadStatus === LaunchpadStatus.ENDED

  return isNotGuarantedTier || isNotWhiteListComnunity ? (
    <HandleButtonsStyle style={{ height: heightHandleButtons }} className='launchpad-card-button-group'>
      <div style={{ cursor: "not-allowed" }}>
        <Button style={{ width: "100%", marginTop: "20px", height: 60 }} disabled variant='dark'>
          You're not whitelist
        </Button>
      </div>
    </HandleButtonsStyle>
  ) : (
    <HandleButtonsStyle style={{ height: heightHandleButtons }} className='launchpad-card-button-group'>
      {canBuy && (
        <BuyButton
          data={data}
          allowance={allowance}
          buyAmountOfTier={buyAmountOfTier}
          purchaseAmount={purchaseAmount}
        />
      )}
      {canClaim && (
        <ClaimButton
          disabled={
            purchaseAmount === 0 ||
            (receiveAmount > 0 && vestedAmount > 0 && receiveAmount === vestedAmount) ||
            disabledClaim
          }
          data={data}
        />
      )}
      {canRefund && (
        <RefundButton data={data} disabled={purchaseAmount === 0 || withdrawAmount > 0 || disabledRefund} />
      )}
    </HandleButtonsStyle>
  )
}

export default HandleButtons
