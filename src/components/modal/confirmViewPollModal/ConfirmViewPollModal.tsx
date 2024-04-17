import { FiX } from "react-icons/fi"
import ConfirmViewPoolModalStyleWrapper from "./ConfirmViewPoolModal.style"
import Button from "src/components/button"
import { useState } from "react"
import { confirmCheckList } from "src/const/view-pool"
import clsx from "clsx"

const ConfirmViewPollModal = ({ onClose, onOk }: { onClose: () => void; onOk: () => void }) => {
  const [checkedList, setCheckedList] = useState([0])

  const handleChecked = (value: number) => {
    const newCheckedList = checkedList.includes(value)
      ? checkedList.filter((item) => item !== value)
      : [...checkedList, value]

    setCheckedList(newCheckedList)
  }

  const isConfirmed = checkedList.length === confirmCheckList.length

  return (
    <>
      <ConfirmViewPoolModalStyleWrapper className='modal_overlay'>
        <div className='modal_box'>
          <div className='modal_content'>
            <div className='modal_header'>
              <h2>Just A Sec!</h2>
              <button onClick={onClose}>
                <FiX />
              </button>
            </div>

            <div className='modal_body text-left'>
              <p>
                By entering to this website and/or using our Services, you hereby agree, represent and warrant that:
              </p>

              <ul className='blur-text show-style'>
                <li>You will be solely responsible to proceed at your own discretion.</li>
                <li>
                  You are not using, and will not in the future use, a VPN to mask your physical location from a
                  restricted location.
                </li>
                <li>
                  You are responsible for ensuring compliance with the laws of your jurisdiction in connections with
                  your use of the our Services.
                </li>
                <li>
                  You understand that BSCS is not liable for your compliance or non-compliance with any such laws.
                </li>
              </ul>

              <p>Please confirm that you are not a Prohibited Person.</p>
              <p className='blur-text text-justify'>
                "Prohibited Person” shall mean any individual or legal entity that is (i) a national or resident of, or
                legal entity formed or incorporated within or subject to the laws of any United States embargoed or
                restricted country; (ii) solely with respect to the non-government sanctioned trading, mining, minting
                of digital assets or cryptocurrency, or support of the foregoing, a national or resident of, or legal
                entity formed or incorporated within, or subject to the laws of the People’s Republic of China; (iii) a
                national or resident of, or legal entity formed or incorporated within or subject to the laws of the
                Republic of Cuba, Democratic People’s Republic of North Korea, Venezuela, Islamic Republic of Iran,
                Libya, Republic of South Sudan, Republic of Sudan, Syrian Arab Republic, the Crimea, or any other
                jurisdiction in which it is prohibited from using the Website (the ”Prohibited Jurisdictions”); (iv)
                included on, or affiliated with any Person on, the United States Commerce Department’s Denied Persons
                List, Entities List, or Unverified List; the U.S. Department of the Treasury’s Specially Designated
                Nationals and Blocked Persons List, Specially Designated Narcotics Traffickers or Specially Designated
                Terrorists, or the Annex to Executive Order No. 13224; the Department of State’s Debarred List; or UN
                Sanctions; (v) a Person with whom business transactions, including exports and re-exports, are
                restricted by a United States Governmental Authority, including each item listed in the foregoing
                clauses (i), (ii), (iii), (iv) and (v) and any updates or revisions thereto and any newly published
                rules therefore; or (vi) a subject or target of any other economic sanctions administered or enforced by
                the United Nations, the European Union, the United States of America, or the United Kingdom."
              </p>

              <ul className='checked-list'>
                {confirmCheckList.map((item) => (
                  <li className='checked-item'>
                    <label
                      className='custom-checkbox-wrapper'
                      onClick={(e) => {
                        e.preventDefault()
                        handleChecked(item.value)
                      }}
                    >
                      <input type='checkbox' checked={checkedList.includes(item.value)} />
                      <span className='custom-checkbox-checkmark'></span>
                    </label>
                    <span className='blur-text checked-item-text'>{item.text}</span>
                  </li>
                ))}
              </ul>

              <div className={clsx("d-flex justify-content-center", { isNotConfirmed: !isConfirmed })}>
                <Button sm variant={isConfirmed ? "blue" : "dark"} onClick={() => isConfirmed && onOk()}>
                  Confirm
                </Button>
              </div>
            </div>
          </div>
        </div>
      </ConfirmViewPoolModalStyleWrapper>
    </>
  )
}

export default ConfirmViewPollModal
