import Empty from "src/components/Empty/Empty"
import LaunchpadCard from "./LaunchpadCard/LaunchpadCard"
import PoolLaunchpadStyleWrapper from "./PoolLaunchpad.style"
import { AdminProjectResponseType } from "src/types/adminProjectList"
import { LaunchpadItemType } from "src/types/viiewPool"
import { useAccount } from "wagmi"
import { useModal } from "src/utils/ModalContext"
import ConnectButton from "src/components/connectButton"

const PoolLaunchpad = ({
  poolData,
  launchpadList
}: {
  poolData?: AdminProjectResponseType
  launchpadList: LaunchpadItemType[]
}) => {
  const { isConnected } = useAccount()
  const { account } = useModal()

  const connected = isConnected && account?.role !== undefined

  return (
    <PoolLaunchpadStyleWrapper>
      {connected ? (
        launchpadList.length > 0 ? (
          launchpadList.map((item) => (
            <div className='launchpad-item'>
              <LaunchpadCard data={item} key={item.uuid} projectData={poolData} />
            </div>
          ))
        ) : (
          <div className='empty'>
            <Empty message='No Launchpad' />
          </div>
        )
      ) : (
        <div className='connectButton'>
          <ConnectButton />
        </div>
      )}
    </PoolLaunchpadStyleWrapper>
  )
}

export default PoolLaunchpad
