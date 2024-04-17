import { useGetPoolData } from "src/hooks/view-pool/useGetPoolData"
import PoolInfo from "./PoolInfro/PoolInfo"
import PoolLaunchpad from "./PoolLaunchpad/PoolLaunchpad"
import ViewPoolDetailsStyleWrapper from "./ViewPoolDetails.style"
import Spin from "src/components/Spin/Spin"
import { ViewPoolDetailsContextProvider } from "./context"
import { useState } from "react"

const ViewPoolDetails = () => {
  const { poolData, launchpadList, loadingInit, onRefesh } = useGetPoolData()
  const [changeDataFlag, setChangeDataFlag] = useState(false)

  return (
    <ViewPoolDetailsStyleWrapper>
      <ViewPoolDetailsContextProvider value={{ onRefeshLaunchpadData: onRefesh, changeDataFlag, setChangeDataFlag }}>
        <Spin spinning={loadingInit}>
          <div className='container'>
            <PoolInfo poolData={poolData} launchpadList={launchpadList} />
            <PoolLaunchpad poolData={poolData} launchpadList={launchpadList} />
          </div>
        </Spin>
      </ViewPoolDetailsContextProvider>
    </ViewPoolDetailsStyleWrapper>
  )
}

export default ViewPoolDetails
