import { useEffect, useState } from "react"
import Button from "src/components/button"
import CardHover from "src/components/cardHover"
import StakingItemStyleWrapper from "./StakingItem.style"
import backIcon from "src/assets/images/icons/x.svg"
import { StakeFilter } from "src/apis/stake/getStakeFilter"
import { TOKEN_DECIMAL } from "src/const/common"
import { useStakingItem } from "src/hooks/staking/useStakingItem"
import { useApprove } from "src/hooks/staking/useApprove"
import { useStake } from "src/hooks/staking/useStake"

type Props = {
  icon: any
  stake: StakeFilter
}

const MIN_AMOUNT = 1

const StakingItem = ({ stake, icon }: Props) => {
  const [isFlip, setFlip] = useState(false)
  const [stakeAmount, setStakeAmount] = useState("")
  const { tvl, amountStaked, balance, allowance, refetch } = useStakingItem({ stake })
  const { onApprove, isLoadingApprove, isSuccessApprove } = useApprove({ stake, refetch, balanceOf: stakeAmount })
  const { onStake, isLoadingStake, isSuccessStake } = useStake({ stake, stakeAmount, refetch })
  const checkShowBtnApprove = Number(stakeAmount) * TOKEN_DECIMAL >= Number(allowance)
  const [minStakeError, setMinStakeError] = useState(false)
  const [minAmountError, setMinAmountError] = useState(false)

  const balanceFormat = new Intl.NumberFormat("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(
    balance
  )

  const balanceFormatted = balanceFormat.replace(/[.,]/g, function (match) {
    return match === "," ? "." : ","
  })

  const invalidAmount = Number(stakeAmount) < stake.minStake && amountStaked < stake.minStake

  useEffect(() => {
    if (isSuccessStake || isSuccessApprove) {
      setStakeAmount("")
    }
  }, [isSuccessStake, isSuccessApprove])

  const handleFlip = (e: any) => {
    e.preventDefault()
    setFlip(false)
    setFlip(true)
    setStakeAmount("")
    setMinStakeError(false)
    setMinAmountError(false)
  }

  const handleChangeAmount = (value: string) => {
    if (Number(value) >= stake.minStake) {
      setMinStakeError(false)
    }

    if (amountStaked >= MIN_AMOUNT) {
      setMinAmountError(false)
    }

    setStakeAmount(value)
  }

  const handleMaxAmount = () => {
    if (balance >= MIN_AMOUNT) {
      setMinAmountError(false)
    }

    setStakeAmount(`${balance}`)
  }

  const handleApprove = () => {
    if (invalidAmount) {
      setMinStakeError(true)
    } else if (Number(stakeAmount) < MIN_AMOUNT) {
      setMinAmountError(true)
    } else {
      onApprove()
    }
  }

  const handleStake = () => {
    if (invalidAmount) {
      setMinStakeError(true)
    } else if (Number(stakeAmount) < MIN_AMOUNT) {
      setMinAmountError(true)
    } else {
      onStake()
    }
  }

  return (
    <StakingItemStyleWrapper>
      <div className={`staking_flip_card_inner ${isFlip === true ? "active" : ""}`}>
        <div className='staking_flip_card_front'>
          <div className='staking_flip_card_front_headings'>
            <h2>{stake.name}</h2>
            <span>
              <img src={icon} alt='icon' />
            </span>
          </div>
          <div className='staking_flip_card_front_body'>
            <div className='staking_flip_card_front_timebg'>
              <span>{stake.durationText}</span>
            </div>
            <div className='staking_apy'>
              <h3>{stake.apr}% APY</h3>
            </div>
            <ul className='staking_flip_card_front_list'>
              <li>
                <span>TVL</span> <strong>{Number(tvl.toFixed(2))} $MPL</strong>
              </li>
              <li>
                <span>Amount staked</span> <strong>{Number(amountStaked.toFixed(2))} $MPL</strong>
              </li>
              <li>
                <span>Minimum Locked</span> <strong>{stake.minStake} $MPL</strong>
              </li>
              <li>
                <span>Boost</span> <strong>{stake.multiplier}x</strong>
              </li>
            </ul>
            <div className='staking_flip_card_front_buttons'>
              <Button style={{ width: "100%" }} variant='blue' href='#' onClick={handleFlip}>
                stake
              </Button>
            </div>
          </div>
        </div>

        {/* card back */}
        <div className='staking_flip_card_back'>
          <div className='staking_flip_card_back_content active-shape'>
            <div className='staking_flip_card_back_overlay'></div>
            <div className='staking_flip_card_back_headings'>
              <h2>Stake</h2>
              <button className='staking_flip_card_close_btn' onClick={() => setFlip(false)}>
                <img src={backIcon} alt='icon' />
              </button>
            </div>
            <div className='staking_flip_card_back_body'>
              <div className='staking_flip_card_back_body_top'>
                <div className='staking_flip_card_front_list'>
                  <ul>
                    <li>
                      <span>Balance</span> <strong>{balanceFormatted} $MPL</strong>
                    </li>
                    <li>
                      <span>Allowance</span>{" "}
                      <strong>{Number((Number(allowance) / TOKEN_DECIMAL).toFixed(2))} $MPL</strong>
                    </li>
                  </ul>
                </div>

                <div className='staking_flip_card_back_form'>
                  <div style={{ marginBottom: minStakeError || minAmountError ? 0 : "16px" }}>Stake Amount</div>
                  {minStakeError ? (
                    <div className='staking_flip_card_back_form_error'>
                      Minimum Locked input value: {stake.minStake}
                    </div>
                  ) : minAmountError ? (
                    <div className='staking_flip_card_back_form_error'>
                      Please enter a value greater than {MIN_AMOUNT}.
                    </div>
                  ) : null}
                  <div className='staking_flip_card_back_form_input'>
                    <input
                      value={stakeAmount}
                      onChange={(e) => handleChangeAmount(e.target.value)}
                      autoComplete='off'
                      type='number'
                      placeholder='0.00 $MPL'
                    />
                    <button onClick={handleMaxAmount}>Max</button>
                  </div>
                </div>
              </div>
              <div className='staking_flip_card_back_approve_btn'>
                {checkShowBtnApprove ? (
                  <Button loading={isLoadingApprove} onClick={handleApprove} variant='mint'>
                    Approve
                  </Button>
                ) : (
                  <Button loading={isLoadingStake} onClick={handleStake} variant='blue'>
                    Stake
                  </Button>
                )}
              </div>
            </div>
          </div>

          <CardHover />
        </div>
      </div>
    </StakingItemStyleWrapper>
  )
}

export default StakingItem
