import { SectionTitleStyle, SectionTitleWrapperStyle } from "./SectionTitle.style"
import sectionTitleShapeRgiht from "src/assets/images/icons/steps.png"
import sectionTitleShapeleft from "src/assets/images/icons/steps2.png"

export const SectionTitle = ({ title, subtitle, isCenter, ...props }: any) => {
  return (
    <SectionTitleStyle {...props} className='section_title'>
      {subtitle && (
        <span className='subtitle'>
          {isCenter ? <img src={sectionTitleShapeleft} alt='section title shape' /> : ""}
          {subtitle} <img src={sectionTitleShapeRgiht} alt='bithu nft section title shape' />{" "}
        </span>
      )}
      {title && <h2>{title}</h2>}
    </SectionTitleStyle>
  )
}

export const SectionTitleWrapper = ({ children }: any) => {
  return <SectionTitleWrapperStyle className='section_title_wrapper'>{children}</SectionTitleWrapperStyle>
}
