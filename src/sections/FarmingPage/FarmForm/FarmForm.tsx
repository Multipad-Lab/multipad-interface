import { AVAILABLE_CHAINS } from "src/const/chains"
import FarmFormStyleWrapper from "./FarmForm.style"
import clsx from "clsx"
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import TabSwitch from "src/components/tabSwitch/TabSwitch"
import { routesName } from "src/const/routes"
import Button from "src/components/button"
import ProgressBar from "src/components/progressBar"
import calculatorIcon from "src/assets/images/icons/calculator.svg"
import { useModal } from "src/utils/ModalContext"

const FarmForm = () => {
  const { handleFarmCalculationModal } = useModal()
  const [tokenActive, setTokenActive] = useState(1)
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [tabActive, setTabActive] = useState<string>(pathname)

  const handleChangeTabSwitch = (key: string) => {
    setTabActive(key)
    navigate(key)
  }

  return (
    <FarmFormStyleWrapper>
      <TabSwitch
        value={tabActive}
        onChange={(key) => handleChangeTabSwitch(key as string)}
        options={[
          { name: "STAKE", key: routesName.STAKING, pathname: routesName.STAKING },
          { name: "FARM", key: routesName.FARMING, pathname: routesName.FARMING }
        ]}
      />

      <div>
        <div className='farm-tokens'>
          {AVAILABLE_CHAINS.map((item) => (
            <div
              onClick={() => setTokenActive(item.key)}
              key={item.key}
              className={clsx("farm-tokens__item", tokenActive === item.key && "farm-tokens__item-active")}
            >
              <img src={item.icon} alt={item.label} />
              {item.label}
            </div>
          ))}
        </div>

        <div className='farm-pool-details'>
          <div className='title'>Pool details</div>
          <div className='earned'>
            <p>0 $MPL</p>
            <p>Earned</p>
          </div>
        </div>

        <div className='d-flex justify-content-end'>
          <Button className='btn-harvest'>harvest</Button>
        </div>

        <div className='farm-info'>
          <div className='d-flex justify-content-between'>
            <div>APR</div>
            <div>46.73 %</div>
          </div>
          <div className='d-flex justify-content-between'>
            <div>REWARD PER MINUTE</div>
            <div>2.31 $MPL</div>
          </div>
          <div className='d-flex justify-content-between'>
            <div>UNLOCKS IN</div>
            <div>-</div>
          </div>
          <div className='d-flex justify-content-between'>
            <div>YOUR STAKE</div>
            <div>0 LP</div>
          </div>
          <div className='d-flex justify-content-between'>
            <div>POOL SHARE</div>
            <div>- %</div>
          </div>
          <div className='d-flex justify-content-between'>
            <div>PARTICIPANTS</div>
            <div>1000</div>
          </div>
          <div className='d-flex justify-content-between'>
            <div>DISTRIBUTED TOKENS</div>
            <div>1,000,000/1,000,000</div>
          </div>
        </div>

        <ProgressBar progress='35%' />

        <div className='balance-allowance'>
          <div className='balance'>
            <p>Balance</p>
            <div className='calculator'>
              <p>0 LP</p>
              <img src={calculatorIcon} alt='calculator' />
            </div>
          </div>
          <div className='allowance'>
            <p>Allowance</p>
            <p>-- LP</p>
          </div>
        </div>

        <Button onClick={() => handleFarmCalculationModal()} className='btn-view-pool'>
          View pool
        </Button>

        <div className='btn-approve-withdraw'>
          <Button className='approve'>Approve</Button>
          <Button className='withdraw'>Withdraw</Button>
        </div>
      </div>
    </FarmFormStyleWrapper>
  )
}

export default FarmForm
