import { InputHTMLAttributes } from "react"
import Button from "../button"
import AmountInputStyle from "./AmountInput.style"

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  name?: string
  className?: string
  onMax?: () => void
  error?: string
}

const InputAmount = ({ label, name, className, onMax, error, ...props }: Props) => {
  return (
    <AmountInputStyle className={`inputAmount__wrapper ${className}`}>
      {label && <label htmlFor={name}>{label}</label>}
      {error && <div className='error'>{error}</div>}
      <div className='inputButton'>
        <input id={name} name={name} type='number' {...props} disabled={props.disabled} />
        <Button disabled={props.disabled} onClick={onMax} className='btnMax'>
          Max
        </Button>
      </div>
    </AmountInputStyle>
  )
}

export default InputAmount
