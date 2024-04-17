import LiveProject from "src/sections/Projects/v2"
import Tutorial from "src/sections/Tutorial/v1"
import { useProjectListData } from "src/hooks/project-list/useProjectListData"
import AboutStyleWrapper from "./About.style"

const About = () => {
  const { launchpads, onRefresh } = useProjectListData({ limit: 4 })

  return (
    <AboutStyleWrapper className={launchpads.length ? "" : "notLaunchpads"}>
      <LiveProject launchpads={launchpads} onRefresh={onRefresh} />
      <Tutorial />
    </AboutStyleWrapper>
  )
}

export default About
