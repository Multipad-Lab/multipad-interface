import { FaTelegramPlane, FaTwitter } from "react-icons/fa"
import Button from "src/components/button"
import ApplyFormStyleWrapper from "./ApplyFrom.style"
import { chainList } from "src/const/admin-project-details"
import TextEditor from "./TextEditor"
import Spin from "src/components/Spin/Spin"
import { isNumber } from "src/utils/commons"
import { useForm } from "src/hooks/admin-project-create/useForm"
import { useSubmit } from "src/hooks/admin-project-create/useSubmit"

const ApplyForm = () => {
  const { form, handleChangeForm } = useForm()
  const { handleSubmit, loadingSubmit } = useSubmit({ form })

  return (
    <ApplyFormStyleWrapper>
      <Spin spinning={loadingSubmit}>
        <div className='project-form'>
          <div className='form_widgets'>
            <div className='form-group'>
              <label htmlFor='projectName'>Project Name</label>
              <input
                autoComplete='off'
                onChange={(e) => handleChangeForm({ field: "name", value: e.target.value })}
                value={form.name}
                type='text'
                id='projectName'
                placeholder='Project Name'
                className='form-control'
              />
            </div>

            <div className='form-group'>
              <label htmlFor='projectLogo'>Project Logo</label>
              <input
                autoComplete='off'
                value={form.logoUrl}
                onChange={(e) => handleChangeForm({ field: "logoUrl", value: e.target.value })}
                type='text'
                id='projectLogo'
                placeholder='Project Logo URL'
                className='form-control'
              />
            </div>

            <div className='form-group'>
              <label htmlFor='projectBackground'>Project Background</label>
              <input
                autoComplete='off'
                value={form.backgroundUrl}
                onChange={(e) => handleChangeForm({ field: "backgroundUrl", value: e.target.value })}
                type='text'
                id='projectBackground'
                placeholder='Project Background URL'
                className='form-control'
              />
            </div>

            <div className='form-group'>
              <label htmlFor='images'>Project Images</label>
              <textarea
                autoComplete='off'
                value={form.images}
                onChange={(e) => handleChangeForm({ field: "images", value: e.target.value })}
                id='images'
                cols={30}
                rows={10}
                placeholder='Project Images'
              ></textarea>
            </div>

            <div className='form-group'>
              <label htmlFor='website'>PROJECT WEBSITE</label>
              <input
                autoComplete='off'
                type='text'
                id='website'
                placeholder='Enter link'
                className='form-control'
                onChange={(e) => handleChangeForm({ field: "website", value: e.target.value })}
                value={form.website}
              />
            </div>

            <div className='form-group'>
              <label htmlFor='description'>Project Description</label>
              <textarea
                autoComplete='off'
                value={form.description}
                onChange={(e) => handleChangeForm({ field: "description", value: e.target.value })}
                id='description'
                cols={30}
                rows={10}
                placeholder='Project Description'
              ></textarea>
            </div>

            <div className='form-group' style={{ marginBottom: 24 }}>
              <label htmlFor='projectDetails'>Project Brief</label>
              <TextEditor height={500} initValue={form.fulltextInfoProject} onChangeForm={handleChangeForm} />
            </div>

            <div className='form-group'>
              <label htmlFor='totalSupply'>Total Supply</label>
              <input
                value={form.totalSupply}
                onChange={(e) => {
                  const value = e.target.value
                  if (isNumber(value)) handleChangeForm({ field: "totalSupply", value: value })
                }}
                autoComplete='off'
                type='text'
                id='totalSupply'
                placeholder='Total Supply'
                className='form-control'
              />
            </div>

            <div className='form-group'>
              <label htmlFor='ownerAddress'>Owner Address</label>
              <input
                autoComplete='off'
                value={form.ownerAddress}
                onChange={(e) => handleChangeForm({ field: "ownerAddress", value: e.target.value })}
                id='ownerAddress'
                placeholder='Owner Address'
                type='text'
              />
            </div>

            <div className='form-group'>
              <label htmlFor='tokenAddress'>Token Address</label>
              <input
                autoComplete='off'
                value={form.tokenAddress}
                onChange={(e) => handleChangeForm({ field: "tokenAddress", value: e.target.value })}
                id='tokenAddress'
                placeholder='Token Address'
                type='text'
              />
            </div>

            <div className='form-group'>
              <label htmlFor='tokenSymbol'>Token Symbol</label>
              <input
                autoComplete='off'
                value={form.tokenSymbol}
                id='  '
                placeholder='Token Symbol'
                type='text'
                disabled
              />
            </div>

            <div className='form-group'>
              <label htmlFor='tokenDecimal'>Token Decimal</label>
              <input
                autoComplete='off'
                value={form.tokenDecimal}
                id='tokenDecimal'
                placeholder='Token Decimal'
                type='text'
                disabled
              />
            </div>
          </div>
          <div className='form_widgets form_check'>
            <h5>BLOCKCHAIN</h5>
            {chainList.map((chain) => (
              <label>
                {chain.name}
                <input
                  type='radio'
                  name='platfrom'
                  value={Number(chain.chainId)}
                  checked={form.chain == chain.chainId}
                  onChange={(e) => handleChangeForm({ field: "chain", value: Number(e.target.value) })}
                />
              </label>
            ))}
          </div>
          <div className='form_widgets form_check'>
            <h5>PROJECT STATUS</h5>

            <label>
              Inactive
              <input
                onChange={(e) => handleChangeForm({ field: "status", value: Number(e.target.value) })}
                type='radio'
                name='status'
                value={1}
                checked={form.status === 1}
              />
            </label>
            <label>
              Active
              <input
                onChange={(e) => handleChangeForm({ field: "status", value: Number(e.target.value) })}
                type='radio'
                name='status'
                value={0}
                checked={form.status === 0}
              />
            </label>
          </div>
          <div className='form_widgets' style={{ marginTop: 12 }}>
            <div className='form-group'>
              <label htmlFor='telegram'>TELEGRAM GROUP</label>
              <div className='input_with_icon'>
                <div className='input_social_icon'>
                  <FaTelegramPlane />
                </div>
                <input
                  autoComplete='off'
                  onChange={(e) => handleChangeForm({ field: "telegram", value: e.target.value })}
                  value={form.telegram}
                  type='text'
                  id='telegram'
                  placeholder='Enter telegram group link'
                  className='form-control'
                />
              </div>
            </div>
            <div className='form-group'>
              <label htmlFor='telegram'>Project Twitter</label>
              <div className='input_with_icon'>
                <div className='input_social_icon'>
                  <FaTwitter />
                </div>
                <input
                  autoComplete='off'
                  onChange={(e) => handleChangeForm({ field: "twitter", value: e.target.value })}
                  value={form.twitter}
                  type='text'
                  id='twitter'
                  placeholder='Enter twitter link'
                  className='form-control'
                />
              </div>
            </div>
          </div>
          <div className='form_widgets'>
            <div className='form-group'>
              <Button variant='blue' lg onClick={(e: any) => handleSubmit(e)}>
                Create Project
              </Button>
            </div>
          </div>
        </div>
      </Spin>
    </ApplyFormStyleWrapper>
  )
}

export default ApplyForm
