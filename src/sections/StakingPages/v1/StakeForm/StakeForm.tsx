import { useEffect, useState } from "react"
import TabSwitch from "src/components/tabSwitch/TabSwitch"
import StakeFormStyleWrapper from "./StakeForm.style"
import clsx from "clsx"
import AmountInput from "src/components/amountInput/AmountInput"
import Button from "src/components/button"
import { useLocation, useNavigate } from "react-router-dom"
import { routesName } from "src/const/routes"
import { useNetwork } from "wagmi"
import { useStakeData } from "src/hooks/staking/useStakeData"
import { useStakingItem } from "src/hooks/staking/useStakingItem"
import { useStake } from "src/hooks/staking/useStake"
import { TOKEN_DECIMAL } from "src/const/common"
import { useApprove } from "src/hooks/staking/useApprove"
import Spin from "src/components/Spin/Spin"
import { formatEther } from "viem"

const MIN_AMOUNT = "0.0000001"

const formattedNumber = (value: number) => {
  const valueFormat = new Intl.NumberFormat("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(
    value
  )

  return valueFormat.replace(/[.,]/g, function (match) {
    return match === "," ? "." : ","
  })
}

const StakeFarmForm = ({ handleUpdateStakeHistory }: { handleUpdateStakeHistory?: (value: boolean) => void }) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { chain } = useNetwork()

  const [tabActive, setTabActive] = useState<string>(pathname)
  const [stakeAmount, setStakeAmount] = useState("")
  const [minAmountError, setMinAmountError] = useState(false)

  const { packageList, loading, packageActive, handleChangePackageActive } = useStakeData({
    chainIdActive: chain?.id
  })
  const { amountStaked, balance, allowance, balanceOf, refetch } = useStakingItem({ stake: packageActive! })
  const { onApprove, isLoadingApprove } = useApprove({ stake: packageActive!, balanceOf, refetch })
  const { onStake, isLoadingStake, isSuccessStake } = useStake({ stake: packageActive!, stakeAmount, refetch, balance })

  const checkShowBtnApprove = Number(stakeAmount) * TOKEN_DECIMAL > Number(allowance)
  const balanceFormatted = formattedNumber(balance)
  const allowanceFormatted = formattedNumber(Number(formatEther(BigInt(allowance))))
  const stakedAmountFormatted = formattedNumber(amountStaked)

  useEffect(() => {
    if (isSuccessStake) {
      handleUpdateStakeHistory?.(true)
      setStakeAmount("")
    }
  }, [isSuccessStake])

  const handleChangeTabSwitch = (key: string) => {
    setTabActive(key)
    navigate(key)
  }

  const handleChangeAmount = (value: string) => {
    if (+value >= +MIN_AMOUNT) {
      setMinAmountError(false)
    }

    setStakeAmount(value)
  }

  const handleApprove = () => {
    if (Number(stakeAmount) < +MIN_AMOUNT) {
      setMinAmountError(true)
    } else {
      onApprove()
    }
  }

  const handleStake = () => {
    if (Number(stakeAmount) < +MIN_AMOUNT) {
      setMinAmountError(true)
    } else {
      onStake()
    }
  }

  const handleMaxAmount = () => {
    if (balance >= +MIN_AMOUNT) {
      setMinAmountError(false)
    }

    setStakeAmount(`${balance}`)
  }

  return (
    <Spin spinning={loading}>
      <StakeFormStyleWrapper>
        <TabSwitch
          value={tabActive}
          onChange={(key) => handleChangeTabSwitch(key as string)}
          options={[
            { name: "STAKE", key: routesName.STAKING, pathname: routesName.STAKING },
            { name: "FARM", key: routesName.FARMING, pathname: routesName.FARMING }
          ]}
        />

        <div>
          {packageList.length ? (
            <>
              <div className='stake-tiers'>
                {packageList.map((item) => (
                  <div
                    key={item._id}
                    onClick={() => handleChangePackageActive(item)}
                    className={clsx("stake-tiers__item", item._id === packageActive?._id && "stake-tiers__item-active")}
                  >
                    <div className='name'>{item.durationText}</div>
                    <div className='ratio'>({item.multiplier}x)</div>
                  </div>
                ))}
              </div>

              <div className='description'>
                {packageActive?.apr}% $MPL APR, {Number(packageActive?.multiplier) * 100}% negative impact (
                {packageActive?.multiplier}x) on seed staking points generation per $MPL.
              </div>

              <div className='stake-info'>
                <div className='d-flex justify-content-between'>
                  <div>Staked Amount</div>
                  <div>{stakedAmountFormatted} $MPL</div>
                </div>
                <div className='d-flex justify-content-between'>
                  <div>Wallet Balance</div>
                  <div>{balanceFormatted} $MPL</div>
                </div>
                <div className='d-flex justify-content-between'>
                  <div>Allowance</div>
                  <div>{allowanceFormatted} $MPL</div>
                </div>
              </div>

              <AmountInput
                disabled={balance === 0}
                value={stakeAmount}
                onChange={(e) => handleChangeAmount(e.target.value)}
                className='stake-mount'
                label='Enter Stake Amount'
                placeholder='$MPL Amount'
                error={minAmountError ? `Please enter a value greater than ${MIN_AMOUNT}.` : ""}
                onMax={handleMaxAmount}
              />

              <div className='stake-parameter'>
                <div className='stake-parameter__item'>
                  <p>APR Rate</p>
                  <p>{packageActive?.apr}%</p>
                </div>

                <div className='stake-parameter__item'>
                  <p>Maturity Date</p>
                  <p>--</p>
                </div>

                <div className='stake-parameter__item'>
                  <p>Reward Balance</p>
                  <p>0</p>
                </div>
              </div>

              <Button
                disabled={balance === 0}
                onClick={checkShowBtnApprove ? handleApprove : handleStake}
                loading={isLoadingApprove || isLoadingStake}
                className='btnApprove'
              >
                {checkShowBtnApprove ? "Approve" : "Stake"}
              </Button>
              {/* <Button className='btnWithdraw'>Withdraw</Button> */}
            </>
          ) : (
            <div className='coming_soon'>Coming soon.</div>
          )}
        </div>
      </StakeFormStyleWrapper>
    </Spin>
  )
}

export default StakeFarmForm
