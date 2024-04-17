import CTA from "src/sections/CTA/v1"
import FooterBottom from "../FooterBottom/v1"
import FooterStyleWrapper from "./footer.style"

const Footer = ({ showCTA = true }: { showCTA?: boolean }) => {
  return (
    <FooterStyleWrapper>
      {showCTA && <CTA />}
      <FooterBottom />
    </FooterStyleWrapper>
  )
}

export default Footer
