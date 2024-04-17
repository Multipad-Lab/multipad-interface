import { SpinStyleWrapper } from "./Spin.style"
import loading from "src/assets/images/icons/loading.svg"

const Spin = ({ children, spinning }: { children: JSX.Element; spinning: boolean }) => {
  return spinning ? (
    <SpinStyleWrapper>
      <div className='spinning-overlay'>
        <img className='spinning-icon' src={loading} alt='loading' />
      </div>

      {children}
    </SpinStyleWrapper>
  ) : (
    children
  )
}

export default Spin
