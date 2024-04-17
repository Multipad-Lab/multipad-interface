import { useEffect, useState } from "react"
import { PurchaseHistory, PurchaseHistoryParams, purchaseHistory } from "src/apis/myAccount/purchaseHistory"
import headingShape from "src/assets/images/icons/steps.png"
import { useAccount } from "wagmi"
import MyAccountStyleWrapper from "./MyAccount.style"
import Spin from "src/components/Spin/Spin"
import Empty from "src/components/Empty/Empty"
import { blockchainList } from "src/const/project-list"
import { Link, useNavigate } from "react-router-dom"
import Pagination from "src/components/pagination/Pagination"
import { routeTo } from "src/utils/services/routes"
import { routesName } from "src/const/routes"
import { LaunchpadName } from "src/types/viiewPool"
import dayjs from "dayjs"

const MyAccount = () => {
  const { address } = useAccount()
  const [loading, setLoading] = useState(false)
  const [purchaseHistoryList, setPurchaseHistoryList] = useState<PurchaseHistory[]>([])
  const [filters, setFilters] = useState<PurchaseHistoryParams>({
    userAddress: address,
    page: 1,
    limit: 10
  })
  const [totalPages, setTotalPages] = useState(1)
  const navigate = useNavigate()

  useEffect(() => {
    if (!address) return
    setLoading(true)
    purchaseHistory({ ...filters, userAddress: address })
      .then((res) => {
        setPurchaseHistoryList(res.data.docs)
        setTotalPages(res.data.totalPages)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [address, filters])

  const handleProjectDetail = (uuid: string) => {
    navigate(routeTo(routesName.PROJECT_DETAILS, { id: uuid }))
  }

  return (
    <MyAccountStyleWrapper>
      <div className='container'>
        <h3 className='widget_title'>
          PURCHASE HISTORY <img src={headingShape} alt='shape' />
        </h3>

        <Spin spinning={loading}>
          <>
            <div className='schedule_table'>
              <table>
                <tbody>
                  <tr className='table-header'>
                    <th>NO.</th>
                    <th>PROJECT NAME</th>
                    <th>Txn HASH</th>
                    <th>LAUNCHPAD TYPE</th>
                    <th>AMOUNT</th>
                    <th>CHAIN</th>
                    <th>PURCHASED</th>
                  </tr>
                  {purchaseHistoryList.map((item, index) => {
                    return (
                      <tr className='table-row' onClick={() => handleProjectDetail(item.launchpad.project.uuid)}>
                        <td>{index + 1}</td>
                        <td>{item.launchpad.project.name}</td>
                        <td>
                          <Link target='_blank' to={"https://testnet.bscscan.com/tx/" + item.txHash}>
                            {item.txHash.slice(0, 13)}...
                          </Link>
                        </td>
                        <td>{LaunchpadName[item.launchpad.type]}</td>
                        <td>{Number(item.amount).toFixed(6)} MPL</td>
                        <td>
                          <img src={blockchainList.find((chain) => chain.id === item.chain)?.icon} alt='Chain icon' />
                        </td>
                        <td>{dayjs(item.createdAt).format("YYYY-MM-DD HH:mm:ss")}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>

              {!loading && !purchaseHistoryList.length && (
                <div className='text-center mt-5'>
                  <Empty />
                </div>
              )}
            </div>

            {totalPages > 0 && purchaseHistoryList.length > 0 && (
              <Pagination
                totalPages={totalPages}
                activePage={filters.page || 1}
                onChangePage={(page) => setFilters({ ...filters, page })}
              />
            )}
          </>
        </Spin>
      </div>
    </MyAccountStyleWrapper>
  )
}

export default MyAccount
