import { RiTwitterXFill } from "react-icons/ri"
import { LiaTelegram } from "react-icons/lia"
import avatar1 from "src/assets/images/team/team-image.png"
import avatar2 from "src/assets/images/team/team-image2.png"
import avatar3 from "src/assets/images/team/team-image3.png"
import avatar4 from "src/assets/images/team/team-image4.png"

const socialLinks = [
  {
    icon: <LiaTelegram />,
    url: "#"
  },
  {
    icon: <RiTwitterXFill />,
    url: "#"
  }
]
const data = [
  {
    avatar: avatar1,
    name: "Suko",
    designation: "CEO",
    socialLinks
  },
  {
    avatar: avatar2,
    name: "Peter",
    designation: "Founder",
    socialLinks
  },
  {
    avatar: avatar3,
    name: "Kachi",
    designation: "CMO",
    socialLinks
  },
  {
    avatar: avatar4,
    name: "Deedee",
    designation: "CTO",
    socialLinks
  }
]

export default data
