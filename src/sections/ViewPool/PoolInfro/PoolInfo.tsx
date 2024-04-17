import PoolInfoStyleWrapper from "./PoolInfo.style"
import { Link, useParams } from "react-router-dom"
import { routeTo } from "src/utils/services/routes"
import { routesName } from "src/const/routes"
import redirectIcon from "src/assets/images/icons/redirect-icon.svg"
import iconCopy from "src/assets/images/icons/iconCopy.svg"
import { socialLinks } from "src/const/view-pool"
import Tag from "src/components/tag/Tag"
import {
  convertAddress,
  convertTokenAmountToShow,
  copyToClipboard,
  getTokenIcon,
  getTokenSymbol,
  toCapitalizeFirstLetter
} from "src/utils/commons"
import RightInfoRow from "./RightInfoRow/RightInfoRow"
import { AdminProjectResponseType } from "src/types/adminProjectList"
import { LaunchpadItemType } from "src/types/viiewPool"
import { toast } from "react-toastify"
import ImgProfile from "src/components/image/Image"

const PoolInfo = ({
  poolData,
  launchpadList
}: {
  poolData?: AdminProjectResponseType
  launchpadList: LaunchpadItemType[]
}) => {
  const { id } = useParams()
  const launchpadTotolSupply = launchpadList.reduce(
    (total, item) => total + convertTokenAmountToShow(item.totalRaise, poolData?.tokenDecimal),
    0
  )

  const handleCopyAddress = () => {
    poolData?.tokenAddress && copyToClipboard(poolData.tokenAddress)
    toast.success("copied to clipboard!", { position: "top-center" })
  }

  return (
    <PoolInfoStyleWrapper>
      <div className='pool-info-left'>
        <div className='pool-info-data'>
          <div className='logo'>
            <ImgProfile path={poolData?.logoUrl || ""} alt='Logo' />
          </div>
          <div className='info'>
            <div className='info-name'>
              <span className='name'>{poolData?.name}</span>
              <span className='symbol'>{`${poolData?.tokenSymbol}/${poolData?.paymentSymbol}`}</span>
              {poolData?.label?.[0] && <Tag label={toCapitalizeFirstLetter(poolData.label[0])} />}
            </div>
            <div className='network-wrapper'>
              <div className='network'>
                {socialLinks.map((link) => (
                  <Link
                    key={link.field}
                    to={poolData ? (poolData[link.field as keyof AdminProjectResponseType] as string) || "#" : "#"}
                    target='_blank'
                  >
                    {link.icon}
                  </Link>
                ))}
              </div>
              <div className='address' onClick={handleCopyAddress}>
                {convertAddress(poolData?.tokenAddress || "")} <img src={iconCopy} alt='icon copy' />
              </div>
            </div>
          </div>
        </div>
        <p className='pool-info-dsc'>{poolData?.description || ""}</p>
        <Link to={routeTo(routesName.PROJECT_DETAILS, { id })}>
          Full Research Project <img src={redirectIcon} alt='redirect-icon' />
        </Link>
      </div>
      <div className='pool-info-right'>
        <div className='chain-info'>
          <RightInfoRow
            title='Symbol'
            content={
              <>
                <div
                  className='icon-wrapper icon-pool'
                  style={{ backgroundImage: `url("${poolData?.logoUrl}")` }}
                ></div>

                {poolData?.tokenSymbol || "-"}
              </>
            }
          />

          <RightInfoRow
            title='Join Network'
            content={
              <>
                <div className='icon-wrapper'>
                  <img src={getTokenIcon(poolData?.chain)} alt={getTokenSymbol(poolData?.chain)} />
                </div>
                {`${getTokenSymbol(poolData?.chain)}`}
              </>
            }
          />

          <RightInfoRow
            title='Token Network'
            content={
              <>
                <div className='icon-wrapper'>
                  <img src={getTokenIcon(poolData?.chain)} alt={getTokenSymbol(poolData?.chain)} />
                </div>
                {`${getTokenSymbol(poolData?.chain)}`}
              </>
            }
          />
        </div>
        <div className='ido-info'>
          {/* <RightInfoRow title='Swap Rate' content={<>{poolData?.pricePerText || "-"}</>} /> */}
          <RightInfoRow
            title='IDO Supply'
            content={<>{`${launchpadTotolSupply.toLocaleString()} ${poolData?.tokenSymbol}`}</>}
          />
          <RightInfoRow
            title='Total Supply'
            content={<>{`${(poolData?.totalSupply || "").toLocaleString()} ${poolData?.tokenSymbol}`}</>}
          />
        </div>
      </div>
    </PoolInfoStyleWrapper>
  )
}

export default PoolInfo
