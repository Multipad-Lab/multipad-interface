import { Link } from "react-router-dom"
import MultipadTabsWrapper from "./MultipadTabs.style"

type Props = {
  onChange: (key: number) => void
  active?: number
}

const MultipadTabs = ({ active, onChange }: Props) => {
  return (
    <MultipadTabsWrapper>
      <div className='multipad-tabs'>
        <Link onClick={() => onChange(1)} className={active === 1 ? "active" : ""} to='#'>
          Description
        </Link>
        <Link onClick={() => onChange(2)} className={active === 2 ? "active" : ""} to='#'>
          Token Sale
        </Link>
      </div>
    </MultipadTabsWrapper>
  )
}

export default MultipadTabs
