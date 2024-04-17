import clsx from "clsx"
import TabStyleWrapper from "./Tag.style"

const Tag = ({ label }: { label: string }) => {
  return (
    <TabStyleWrapper>
      <div className={clsx("tag", { riskless: label.toLocaleLowerCase() === "riskless" })}>{label}</div>
    </TabStyleWrapper>
  )
}

export default Tag
