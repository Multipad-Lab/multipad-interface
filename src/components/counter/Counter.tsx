import { useState } from "react"
import CountUp from "react-countup"
import VisibilitySensor from "react-visibility-sensor"

const Counter = ({ className, ...rest }: any) => {
  const [viewPortEntered, setViewPortEntered] = useState(false)

  return (
    <CountUp {...rest} start={viewPortEntered ? null : 0}>
      {({ countUpRef }: any) => {
        return (
          <VisibilitySensor
            active={!viewPortEntered}
            onChange={(isVisible: any) => {
              if (isVisible) {
                setViewPortEntered(true)
              }
            }}
            delayedCall
          >
            <span className={className} ref={countUpRef} />
          </VisibilitySensor>
        )
      }}
    </CountUp>
  )
}

export default Counter
