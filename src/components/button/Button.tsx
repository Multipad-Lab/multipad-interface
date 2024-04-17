import clsx from "clsx"
import LinkStyle from "./Button.style"

type Props = any & {
  children: ChildNode
  href: string
  loading: boolean
  disabled: boolean
}

const Button = ({ children, href, loading, disabled, onClick, ...props }: Props) => {
  return (
    <LinkStyle
      {...props}
      to={href ? href : "#"}
      className={clsx(`btn_wrapper ${props.className}`, loading && "btn_loading", disabled && "btn_disabled")}
      onClick={loading || disabled ? undefined : onClick}
    >
      {loading && (
        <div className='spinner-border text-black' style={{ width: "1.5rem", height: "1.5rem" }} role='status'>
          <span className='sr-only'></span>
        </div>
      )}

      {children}

      <div className='hover_shape_wrapper'>
        <span className='btn_hover_shape btn_hover_shape-1'></span>
        <span className='btn_hover_shape btn_hover_shape-2'></span>
        <span className='btn_hover_shape btn_hover_shape-3'></span>
      </div>
    </LinkStyle>
  )
}

export default Button
