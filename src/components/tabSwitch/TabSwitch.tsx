import clsx from "clsx"
import Button from "../button"
import TabSwitchStyleWrapper from "./TabSwitch.style"

type Option = { name: string; key: number | string; pathname?: string }

type Props = {
  options: Option[]
  onChange?: (key: number | string) => void
  value?: number | string
}

const TabSwitch = ({ options, onChange, value }: Props) => {
  return (
    <TabSwitchStyleWrapper>
      {options.map((option) => (
        <Button
          className={clsx("tabSwitch", option.key === value && "tabSwitch-active")}
          onClick={() => onChange?.(option.key)}
          key={option.key}
          href={option?.pathname}
        >
          {option.name}
        </Button>
      ))}
    </TabSwitchStyleWrapper>
  )
}

export default TabSwitch
