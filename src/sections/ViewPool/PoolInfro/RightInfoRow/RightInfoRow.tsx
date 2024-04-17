import RightInfoRowStyleWrapper from "./RightInfoRow.style"

const RightInfoRow = ({ title, content }: { title: string; content: JSX.Element }) => {
  return (
    <RightInfoRowStyleWrapper>
      <span>{title}:</span>

      <div>{content}</div>
    </RightInfoRowStyleWrapper>
  )
}

export default RightInfoRow
