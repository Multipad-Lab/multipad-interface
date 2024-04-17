import { AdminProjectResponseType } from "src/types/adminProjectList"
import TokenSaleStyleWrapper from "./TokenSale.style"
import { convertFixed2Amount } from "src/utils/commons"

const TokenSale = ({ projectData }: { projectData?: AdminProjectResponseType }) => {
  return (
    <TokenSaleStyleWrapper>
      <div className='token-sale-table'>
        <div className='token-sale-table__header'>Token Sale</div>
        <div className='token-sale-table__item'>
          <div>Total Supply</div>
          <div>{projectData?.totalSupply ? convertFixed2Amount(Number(projectData?.totalSupply), 0) : "-"}</div>
        </div>

        <div className='token-sale-table__item'>
          <div>Token Address</div>
          <div>{projectData?.tokenAddress || "-"}</div>
        </div>

        <div className='token-sale-table__item'>
          <div>Token Symbol</div>
          <div>{projectData?.tokenSymbol || "-"}</div>
        </div>
      </div>
    </TokenSaleStyleWrapper>
  )
}

export default TokenSale
