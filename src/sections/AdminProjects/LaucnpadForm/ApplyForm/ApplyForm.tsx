import Button from "src/components/button"
import ApplyFormStyleWrapper from "./ApplyFrom.style"
import Spin from "src/components/Spin/Spin"
import { useForm } from "src/hooks/admin-project-launchpad/useForm"
import { useSubmit } from "src/hooks/admin-project-launchpad/useSubmit"
import { AdminProjectResponseType } from "src/types/adminProjectList"
import DatePicker from "react-datepicker"
import dayjs from "dayjs"
import "react-datepicker/dist/react-datepicker.css"
import { LaunchpadItemType, LaunchpadType } from "src/types/viiewPool"
import clsx from "clsx"
import { isNumber } from "src/utils/commons"
import { LaunchpadStatus } from "src/types/userLaunchpadList"
import WhiteListModal from "../WhiteListModal/WhiteListModal"
import { useState } from "react"

const ApplyForm = ({
  launchpad,
  projectData,
  handleAfterSubmitForm,
  launchpadList
}: {
  launchpad?: LaunchpadItemType
  projectData?: AdminProjectResponseType
  handleAfterSubmitForm: () => void
  launchpadList: LaunchpadItemType[]
}) => {
  const { form, loadingInit, handleChangeForm, launchpadDataOnChain } = useForm({
    launchpad,
    projectData,
    launchpadList
  })
  const { handleSubmit, loadingSubmit } = useSubmit({
    form,
    projectData,
    launchpadDataOnChain,
    launchpadDataApi: launchpad,
    handleAfterSubmitForm
  })
  const [whiteListModalId, setWhiteListModalId] = useState("")

  return (
    <ApplyFormStyleWrapper>
      {whiteListModalId && (
        <WhiteListModal
          launchpadId={whiteListModalId}
          close={() => setWhiteListModalId("")}
          canNotUpdate={
            launchpadDataOnChain?.launchpadStatus !== undefined &&
            [LaunchpadStatus.ENDED, LaunchpadStatus.CANCELLED].includes(launchpadDataOnChain.launchpadStatus)
          }
        />
      )}
      <Spin spinning={loadingSubmit || loadingInit}>
        <div className='project-form'>
          <div className='form_widgets'>
            <div className={clsx("form_widgets form_check", { disabled: !!launchpad })} style={{ marginBottom: 20 }}>
              <h5 style={{ marginBottom: 0 }}>LAUNCHPAD TYPE</h5>

              {(!launchpadList.find((item) => item.type === LaunchpadType.GUARANTEED) || launchpad) && (
                <label className={launchpad ? "launchpad-type-disable" : ""}>
                  GUARANTEED
                  <input
                    disabled={!!launchpad}
                    onChange={(e) => handleChangeForm({ field: "type", value: Number(e.target.value) })}
                    type='radio'
                    name='type'
                    value={LaunchpadType.GUARANTEED}
                    checked={form.type === LaunchpadType.GUARANTEED}
                  />
                </label>
              )}
              {(!launchpadList.find((item) => item.type === LaunchpadType.COMMUNITY) || launchpad) && (
                <label className={launchpad ? "launchpad-type-disable" : ""}>
                  COMMUNITY
                  <input
                    disabled={!!launchpad}
                    onChange={(e) => handleChangeForm({ field: "type", value: Number(e.target.value) })}
                    type='radio'
                    name='type'
                    value={LaunchpadType.COMMUNITY}
                    checked={form.type === LaunchpadType.COMMUNITY}
                  />
                </label>
              )}
              {(!launchpadList.find((item) => item.type === LaunchpadType.FCFS) || launchpad) && (
                <label className={launchpad ? "launchpad-type-disable" : ""}>
                  FCFS
                  <input
                    disabled={!!launchpad}
                    onChange={(e) => handleChangeForm({ field: "type", value: Number(e.target.value) })}
                    type='radio'
                    name='type'
                    value={LaunchpadType.FCFS}
                    checked={form.type === LaunchpadType.FCFS}
                  />
                </label>
              )}
            </div>

            {form.type === LaunchpadType.COMMUNITY && launchpad?._id && (
              <div className='form-group'>
                <Button
                  sm='true'
                  variant='outline'
                  style={{ width: 250 }}
                  onClick={() => setWhiteListModalId(launchpad._id)}
                >
                  Whitelist Management
                </Button>
              </div>
            )}

            <div className='form-group'>
              <label htmlFor='totalRaise'>{`Total Sell (${projectData?.tokenSymbol || "-"})`}</label>
              <input
                disabled={launchpadDataOnChain && launchpadDataOnChain?.launchpadStatus !== LaunchpadStatus.PENDING}
                autoComplete='off'
                type='text'
                id='totalRaise'
                placeholder='Total Sell'
                className='form-control'
                onChange={(e) => {
                  const value = e.target.value
                  if (isNumber(value)) handleChangeForm({ field: "totalRaise", value: value })
                }}
                value={form.totalRaise}
              />
            </div>

            {form.type !== LaunchpadType.GUARANTEED && (
              <>
                <div className='form-group'>
                  <label htmlFor='minBuy'>{`Min Buy (${projectData?.paymentSymbol || "-"})`}</label>
                  <input
                    disabled={launchpadDataOnChain && launchpadDataOnChain?.launchpadStatus !== LaunchpadStatus.PENDING}
                    autoComplete='off'
                    type='text'
                    id='minBuy'
                    placeholder='Min Buy'
                    className='form-control'
                    onChange={(e) => {
                      const value = e.target.value
                      if (isNumber(value)) handleChangeForm({ field: "minBuy", value: value })
                    }}
                    value={form.minBuy}
                  />
                </div>

                <div className='form-group'>
                  <label htmlFor='maxBuy'>{`Max Buy (${projectData?.paymentSymbol || "-"})`}</label>
                  <input
                    disabled={launchpadDataOnChain && launchpadDataOnChain?.launchpadStatus !== LaunchpadStatus.PENDING}
                    autoComplete='off'
                    type='text'
                    id='maxBuy'
                    placeholder='Max Buy'
                    className='form-control'
                    onChange={(e) => {
                      const value = e.target.value
                      if (isNumber(value)) handleChangeForm({ field: "maxBuy", value: value })
                    }}
                    value={form.maxBuy}
                  />
                </div>
              </>
            )}

            <div className='form-group'>
              <label htmlFor='hardCap'>{`Hard Cap (${projectData?.paymentSymbol || "-"})`}</label>
              <input
                disabled={launchpadDataOnChain && launchpadDataOnChain?.launchpadStatus !== LaunchpadStatus.PENDING}
                autoComplete='off'
                type='text'
                id='hardCap'
                placeholder='Hard Cap'
                className='form-control'
                onChange={(e) => {
                  const value = e.target.value
                  if (isNumber(value)) handleChangeForm({ field: "hardCap", value: value })
                }}
                value={form.hardCap}
              />
            </div>

            {launchpadDataOnChain?.launchpadStatus === LaunchpadStatus.ENDED && (
              <div
                className={clsx("form_widgets form_check", { disabled: !!launchpadDataOnChain?.vestingEnable })}
                style={{ marginBottom: 10 }}
              >
                <h5 style={{ marginBottom: 0 }}>VESTING</h5>

                <label>
                  ACTIVE
                  <input
                    disabled={launchpadDataOnChain?.vestingEnable}
                    onChange={(e) => {
                      handleChangeForm({ field: "vestingEnable", value: Number(e.target.value) })
                    }}
                    type='radio'
                    name='vestingEnable'
                    value={1}
                    checked={form.vestingEnable === 1}
                  />
                </label>
                <label>
                  INACTIVE
                  <input
                    disabled={launchpadDataOnChain?.vestingEnable}
                    onChange={(e) => handleChangeForm({ field: "vestingEnable", value: Number(e.target.value) })}
                    type='radio'
                    name='vestingEnable'
                    value={0}
                    checked={form.vestingEnable === 0}
                  />
                </label>
              </div>
            )}
            <div className='form-group'>
              <label htmlFor='tgeRate'>TGE Rate</label>
              <input
                disabled={launchpadDataOnChain?.vestingEnable}
                autoComplete='off'
                type='text'
                id='tgeRate'
                placeholder='TGE Rate (%)'
                className='form-control'
                onChange={(e) => {
                  const value = e.target.value
                  if (isNumber(value)) handleChangeForm({ field: "tgeRate", value: value })
                }}
                value={form.tgeRate}
              />
            </div>

            <div className='form-group'>
              <label htmlFor='cliffTime'>Cliff Time</label>
              <input
                disabled={launchpadDataOnChain?.vestingEnable}
                autoComplete='off'
                type='text'
                id='cliffTime'
                placeholder='Cliff Time (months)'
                className='form-control'
                onChange={(e) => {
                  const value = e.target.value
                  if (isNumber(value)) handleChangeForm({ field: "cliffTime", value: value })
                }}
                value={form.cliffTime}
              />
            </div>

            <div className='form-group'>
              <label htmlFor='linearTime'>Linear Time</label>
              <input
                disabled={launchpadDataOnChain?.vestingEnable}
                autoComplete='off'
                type='text'
                id='linearTime'
                placeholder='Linear Time (months)'
                className='form-control'
                onChange={(e) => {
                  const value = e.target.value
                  if (isNumber(value)) handleChangeForm({ field: "linearTime", value: value })
                }}
                value={form.linearTime}
              />
            </div>

            <div className='form-group'>
              <label htmlFor='vestingDelay'>Vesting Delay</label>
              <input
                disabled={launchpadDataOnChain?.vestingEnable}
                autoComplete='off'
                type='text'
                id='vestingDelay'
                placeholder='Vesting Delay (days)'
                className='form-control'
                onChange={(e) => {
                  const value = e.target.value
                  if (isNumber(value)) handleChangeForm({ field: "vestingDelay", value: value })
                }}
                value={form.vestingDelay}
              />
            </div>

            <div className='form-group form-date-picker'>
              <label>Start Time</label>

              <DatePicker
                disabled={launchpadDataOnChain && launchpadDataOnChain?.launchpadStatus !== LaunchpadStatus.PENDING}
                selected={form.startAt ? new Date(form.startAt) : null}
                onChange={(date) => handleChangeForm({ field: "startAt", value: dayjs(date).valueOf() })}
                dateFormat='yyyy/MM/dd hh:mm aa'
                placeholderText='----/--/-- -:-- --'
                showTimeInput
              />
            </div>

            <div className='form-group form-date-picker' style={{ marginBottom: 36 }}>
              <label>End Time</label>

              <DatePicker
                disabled={launchpadDataOnChain && launchpadDataOnChain?.launchpadStatus !== LaunchpadStatus.PENDING}
                selected={form.endAt ? new Date(form.endAt) : null}
                onChange={(date) => handleChangeForm({ field: "endAt", value: dayjs(date).valueOf() })}
                dateFormat='yyyy/MM/dd hh:mm aa'
                placeholderText='----/--/-- -:-- --'
                showTimeInput
              />
            </div>

            {/* <div className='form-group form-date-picker'>
              <label>Claim Time</label>

              <DatePicker
                disabled={!!launchpad}
                selected={form.claimAt ? new Date(form.claimAt) : null}
                onChange={(date) => handleChangeForm({ field: "claimAt", value: dayjs(date).valueOf() })}
                dateFormat='yyyy/MM/dd hh:mm aa'
                placeholderText='----/--/-- -:-- --'
                showTimeInput
              />
            </div> */}
          </div>

          {launchpadDataOnChain?.launchpadStatus === LaunchpadStatus.PENDING && (
            <Button variant='dark' lg onClick={(e: any) => handleSubmit(e, true)} style={{ marginBottom: 24 }}>
              Cancel
            </Button>
          )}

          <Button variant='blue' lg onClick={(e: any) => handleSubmit(e)}>
            {launchpad ? "Update Launchpad" : "Create Launchpad"}
          </Button>
        </div>
      </Spin>
    </ApplyFormStyleWrapper>
  )
}

export default ApplyForm
