import Button from "src/components/button"
import ClaimButtonStyle from "./ClaimButton.style"
import { LaunchpadItemType } from "src/types/viiewPool"
import { AdminProjectResponseType, DataOnChainType } from "src/types/adminProjectList"
import { useClaim } from "src/hooks/ido/useClaim"
import clsx from "clsx"

const ClaimButton = ({
  data,
  disabled
}: {
  data: { launchpad: LaunchpadItemType; projectData: AdminProjectResponseType; dataOnChain: DataOnChainType }
  disabled: boolean
}) => {
  const { onClaim, isLoadingClaim } = useClaim({ data })

  return (
    <ClaimButtonStyle>
      <div className={clsx("action_button", { disabled: disabled })}>
        <Button disabled={disabled} loading={isLoadingClaim} onClick={onClaim} variant={disabled ? "dark" : "mint"}>
          Claim
        </Button>
      </div>
    </ClaimButtonStyle>
  )
}

export default ClaimButton
