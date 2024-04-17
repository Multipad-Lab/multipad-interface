/* eslint-disable no-constant-condition */
import Counter from "src/components/counter"
import titleShape from "src/assets/images/icons/steps.png"
import PageHeaderStyleWrapper from "./PageHeader.style"
import { Address, useAccount, useContractRead, useNetwork } from "wagmi"
import multipadStaking from "src/abis/multipadStaking.json"
import { TOKEN_DECIMAL } from "src/const/common"
import { useModal } from "src/utils/ModalContext"
import { useEffect, useState } from "react"
import { getStakeFilter } from "src/apis/stake/getStakeFilter"
import { Link } from "react-router-dom"
import { routesName } from "src/const/routes"

const PageHeader = ({
  currentPage,
  pageTitle,
  isMyAccountPage,
  isRefetch,
  handleRefetch
}: {
  currentPage: string
  pageTitle: string
  isMyAccountPage?: boolean
  isRefetch?: boolean
  handleRefetch?: (value: boolean) => void
}) => {
  const { address } = useAccount()
  const { account } = useModal()
  const { chain } = useNetwork()
  const [contractAddress, setContractAddress] = useState<Address>()

  const { data: myStakeTvl, refetch: refetchStakeTvl } = useContractRead({
    address: contractAddress,
    abi: multipadStaking.abi,
    functionName: "tvl",
    enabled: !!contractAddress
  })

  const { data: totalStaked, refetch: refetchTotalStaked } = useContractRead({
    address: contractAddress,
    abi: multipadStaking.abi,
    functionName: "totalStaked",
    args: [address],
    enabled: !!address && !!contractAddress
  })

  useEffect(() => {
    if (isRefetch) {
      refetchTotalStaked()
      refetchStakeTvl()
      handleRefetch?.(false)
    }
  }, [isRefetch])

  useEffect(() => {
    if (!chain?.id) return

    getStakeFilter({ chainId: chain.id, sortBy: "idOnChain", orderBy: "asc" }).then((res) => {
      setContractAddress(res.data?.[0]?.address)
    })
  }, [chain?.id])

  return (
    <PageHeaderStyleWrapper>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-3'>
            <div className='breadcrumb_area'>
              <div className='breadcrumb_menu'>
                <>
                  <Link to={routesName.ROOT}>Home</Link> <span>.</span> {currentPage && currentPage}
                </>
                <img className='heading_shape' src={titleShape} alt='bithu nft heading shape' />
              </div>
              <h2 className='breadcrumb_title text-uppercase'>{pageTitle && pageTitle}</h2>
            </div>
          </div>

          <div className='col-lg-7 offset-lg-2'>
            {isMyAccountPage ? (
              <div className='stake_counter'>
                <h6>
                  Current Tier <span>{account?.tier || "N/A"}</span>
                </h6>
                <h6>
                  Your Stake{" "}
                  <Counter
                    end={Number(totalStaked) / TOKEN_DECIMAL}
                    decimal='.'
                    decimals={Number(totalStaked) % 1 !== 0 ? "2" : "0"}
                    suffix=' $MPL'
                  />{" "}
                </h6>
                <h6>
                  Total value MPL lock{" "}
                  <Counter
                    end={Number(myStakeTvl) / TOKEN_DECIMAL}
                    decimal='.'
                    decimals={Number(myStakeTvl) % 1 !== 0 ? "2" : "0"}
                    suffix=' $MPL'
                  />
                </h6>
              </div>
            ) : (
              <div className='stake_counter'>
                <h6>
                  Current Tier <span>{account?.tier || "N/A"}</span>
                </h6>
                <h6>
                  Current Point <span>{account?.point ?? "N/A"}</span>
                </h6>
                <h6>
                  Total Stake{" "}
                  <Counter
                    end={Number(myStakeTvl) / TOKEN_DECIMAL}
                    decimal='.'
                    decimals={Number(myStakeTvl) % 1 !== 0 ? "2" : "0"}
                    suffix=' $MPL'
                  />
                </h6>
                <h6>
                  My Stake{" "}
                  <Counter
                    end={Number(totalStaked) / TOKEN_DECIMAL}
                    decimal='.'
                    decimals={Number(totalStaked) % 1 !== 0 ? "2" : "0"}
                    suffix=' $MPL'
                  />{" "}
                </h6>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageHeaderStyleWrapper>
  )
}

export default PageHeader
