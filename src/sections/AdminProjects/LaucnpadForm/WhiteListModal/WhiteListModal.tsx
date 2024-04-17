import { FiX } from "react-icons/fi"
import WhiteListModalStyleWrapper from "./WhiteListModal.style"
import { useEffect, useState } from "react"
import { getWhiteList, updateWhiteList } from "src/apis/launchpad/whiteList"
import Button from "src/components/button"
import Spin from "src/components/Spin/Spin"
import { toast } from "react-toastify"

const WhiteListModal = ({
  launchpadId,
  close,
  canNotUpdate
}: {
  launchpadId: string
  close: () => void
  canNotUpdate: boolean
}) => {
  const [whiteList, setWhiteList] = useState<string>("")
  const [loadingUpdate, setLoadingUpdate] = useState(false)
  const [loadingWhiteList, setLoadingWhiteList] = useState(false)

  useEffect(() => {
    setLoadingWhiteList(true)
    getWhiteList(launchpadId)
      .then((res: { data: string[] }) => {
        const data = res.data || []
        setWhiteList(data.join("\n"))
      })
      .finally(() => setLoadingWhiteList(false))
  }, [launchpadId])

  const handleUpdateWhiteList = () => {
    if (loadingUpdate || canNotUpdate) return
    const params = {
      launchpad: launchpadId,
      userAddress: whiteList.split("\n").map((item) => item.trim().toLowerCase())
    }
    setLoadingUpdate(true)
    updateWhiteList(params)
      .then(() => {
        toast.success("Update Whitelist Successful!")
      })
      .finally(() => setLoadingUpdate(false))
  }

  return (
    <WhiteListModalStyleWrapper>
      <Spin spinning={loadingWhiteList}>
        <div className='content'>
          <div className='close_btn' onClick={close}>
            <FiX />
          </div>

          <textarea
            autoComplete='off'
            value={whiteList}
            onChange={(e) => setWhiteList(e.target.value)}
            id='whitelist'
            cols={30}
            rows={10}
            placeholder='Enter Whitelist'
          ></textarea>

          <Spin spinning={loadingUpdate}>
            <div style={{ cursor: canNotUpdate ? "not-allowed" : "pointer" }}>
              <Button
                variant={canNotUpdate ? "dark" : "blue"}
                disabled={canNotUpdate}
                sm='true'
                style={{ minHeight: 50 }}
                onClick={handleUpdateWhiteList}
              >
                Update Whitelist
              </Button>
            </div>
          </Spin>
        </div>
      </Spin>
    </WhiteListModalStyleWrapper>
  )
}

export default WhiteListModal
