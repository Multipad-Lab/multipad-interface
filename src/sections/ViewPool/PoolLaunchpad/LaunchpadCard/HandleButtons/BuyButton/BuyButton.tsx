import Button from "src/components/button"
import BuyButtonStyle from "./BuyButton.style"
import { useEffect, useState } from "react"
import { LaunchpadItemType, LaunchpadType } from "src/types/viiewPool"
import { AdminProjectResponseType, DataOnChainType } from "src/types/adminProjectList"
import { useApprove } from "src/hooks/ido/useApprove"
import { useConst } from "src/hooks/ido/useConst"
import { useBuy } from "src/hooks/ido/useBuy"
import messages from "src/const/messages"
import { signature, signatureBuyCommunity } from "src/apis/launchpad/signature"
import { formatEther, formatUnits, parseEther, parseUnits } from "viem"
import { isNumber } from "src/utils/commons"
import { add, subtract } from "lodash"
import clsx from "clsx"

const BuyButton = ({
  data,
  allowance,
  buyAmountOfTier,
  purchaseAmount
}: {
  data: { launchpad: LaunchpadItemType; projectData: AdminProjectResponseType; dataOnChain: DataOnChainType }
  allowance: bigint
  buyAmountOfTier: bigint
  purchaseAmount: number
}) => {
  const [quantity, setQuantity] = useState("")
  const [quantityError, setQuantityError] = useState("")
  const { minBuy, maxBuy } = useConst({ data })

  const { onBuy, isLoadingBuy } = useBuy({
    data,
    refetch: () => {
      setQuantity("")
      data.dataOnChain.refetch()
    }
  })

  const isShowButtonApprove = Number(quantity) > Number(formatEther(allowance)) || Number(quantity) === 0
  const formatedPurchaseAmount = Number(formatUnits(BigInt(purchaseAmount), Number(data.projectData.paymentDecimal)))
  const { onApprove, isLoadingApprove } = useApprove({ data, quantity })

  useEffect(() => {
    if (data.launchpad.type === LaunchpadType.GUARANTEED && buyAmountOfTier) {
      setQuantity(`${formatEther(buyAmountOfTier)}`)
    }
  }, [buyAmountOfTier, data.launchpad.type, purchaseAmount])

  const handleMaxAmount = () => {
    setQuantityError("")
    const availableBuy = subtract(Number(maxBuy), formatedPurchaseAmount)
    setQuantity(data.dataOnChain.balance < availableBuy ? String(data.dataOnChain.balance) : String(availableBuy))
  }

  const handleBuyGuaranteed = () => {
    handleBuy()
  }

  const handleBuy = () => {
    const params = {
      amount: `${parseEther(quantity)}`,
      chain: Number(data.projectData.chain)
    }

    if (data.launchpad.type === LaunchpadType.GUARANTEED) {
      signature(params).then((res) => {
        onBuy(res.data)
        setQuantityError("")
      })
    } else if (data.launchpad.type === LaunchpadType.COMMUNITY) {
      signatureBuyCommunity({
        ...params,
        launchpadId: data.launchpad._id
      }).then((res) => {
        onBuy(res.data)
        setQuantityError("")
      })
    } else {
      onBuy({ data: { amount: Number(parseUnits(quantity, Number(data.projectData.paymentDecimal))) } })
      setQuantityError("")
    }
  }

  const handleBuyCheck = () => {
    if (!quantity) return setQuantityError(messages.M003)
    const newPurchaseAmount = add(Number(quantity), formatedPurchaseAmount)
    if (Number(quantity) < minBuy) setQuantityError(messages.M001)
    else if (Number(quantity) > maxBuy) setQuantityError(messages.M002)
    else if (newPurchaseAmount > maxBuy) setQuantityError(messages.M004)
    else {
      handleBuy()
    }
  }

  const canNotBuy =
    Number(quantity) === 0 ||
    (purchaseAmount > 0 && data.launchpad.type === LaunchpadType.GUARANTEED) ||
    (formatedPurchaseAmount >= maxBuy && data.launchpad.type !== LaunchpadType.GUARANTEED)

  return (
    <>
      {data.launchpad.type !== LaunchpadType.GUARANTEED && (
        <BuyButtonStyle style={{ marginBottom: "-24px" }}>
          <div className={clsx("quantity_input", { disabled: formatedPurchaseAmount >= maxBuy })}>
            <input
              value={quantity}
              onChange={(e) => {
                const value = e.target.value

                if (!isNumber(value)) return

                setQuantity(value)
                setQuantityError("")
              }}
              disabled={formatedPurchaseAmount >= maxBuy}
            />
            <button onClick={() => formatedPurchaseAmount < maxBuy && handleMaxAmount()}>Max</button>
          </div>

          <p className='quantityError'>{quantityError}</p>
        </BuyButtonStyle>
      )}
      <BuyButtonStyle>
        <div className={clsx("action_button", { disabled: canNotBuy })}>
          {isShowButtonApprove ? (
            <Button
              disabled={canNotBuy}
              loading={isLoadingApprove}
              onClick={onApprove}
              variant={canNotBuy ? "dark" : "mint"}
            >
              Approve
            </Button>
          ) : (
            <Button
              disabled={canNotBuy}
              loading={isLoadingBuy}
              onClick={data.launchpad.type === LaunchpadType.GUARANTEED ? handleBuyGuaranteed : handleBuyCheck}
              variant={canNotBuy ? "dark" : "blue"}
            >
              Buy
            </Button>
          )}
        </div>
      </BuyButtonStyle>
    </>
  )
}

export default BuyButton
