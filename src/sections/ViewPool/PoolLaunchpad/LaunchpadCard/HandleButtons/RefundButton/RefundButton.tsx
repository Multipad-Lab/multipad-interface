import Button from "src/components/button"
import { LaunchpadItemType } from "src/types/viiewPool"
import { AdminProjectResponseType, DataOnChainType } from "src/types/adminProjectList"
import RefundButtonStyle from "./RefundButton.style"
import { useRefund } from "src/hooks/ido/useRefund"
import clsx from "clsx"

const RefundButton = ({
  data,
  disabled
}: {
  data: { launchpad: LaunchpadItemType; projectData: AdminProjectResponseType; dataOnChain: DataOnChainType }
  disabled: boolean
}) => {
  const { onRefund, isLoadingRefund } = useRefund({ data })

  return (
    <RefundButtonStyle>
      <div className={clsx("action_button", { disabled: disabled })}>
        <Button disabled={disabled} loading={isLoadingRefund} onClick={onRefund} variant={disabled ? "dark" : "mint"}>
          Refund
        </Button>
      </div>
    </RefundButtonStyle>
  )
}

export default RefundButton
