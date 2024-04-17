import empty from "src/assets/images/empty.png"
import EmptyStyleWrapper from "./Empty.style"

const Empty = ({ message = "No Data" }: { message?: string }) => {
  return (
    <EmptyStyleWrapper>
      <img src={empty} />
      <div>{message}</div>
    </EmptyStyleWrapper>
  )
}

export default Empty
