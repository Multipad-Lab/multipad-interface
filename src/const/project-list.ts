import { ProjectFilterAccessEnum, ProjectStatusLabelEnum, ProjectStatusType } from "src/types/projectList"
import coinIcon1 from "src/assets/images/project/previous-image.png"
import coinIcon2 from "src/assets/images/project/previous-image2.png"
import coinIcon3 from "src/assets/images/project/previous-image3.png"
import coinIcon4 from "src/assets/images/project/chain.png"
import { LaunchpadType } from "src/types/viiewPool"
export const tabList: { label: ProjectStatusLabelEnum; value: ProjectStatusType }[] = [
  {
    label: ProjectStatusLabelEnum.OPEN,
    value: "open"
  },
  {
    label: ProjectStatusLabelEnum.UPCOMMING,
    value: "upcomming"
  },
  {
    label: ProjectStatusLabelEnum.PAST,
    value: "past"
  }
]

export const accessList: { title: string; value: ProjectFilterAccessEnum }[] = [
  {
    title: "All Access",
    value: "all"
  },
  {
    title: "FCFS",
    value: "public"
  },
  {
    title: "Guaranteed",
    value: "private"
  },
  {
    title: "Community",
    value: "community"
  }
]

export const blockchainList: { name: string; id: number | undefined; icon: string }[] = [
  {
    name: "Binance (BSC)",
    icon: coinIcon1,
    id: 97
  },
  {
    name: "Ethereum (ETH)",
    icon: coinIcon2,
    id: 1
  },
  {
    name: "Polygon",
    icon: coinIcon3,
    id: 137
  },
  {
    name: "All Block Chain",
    icon: coinIcon4,
    id: undefined
  }
]

export const accessListUser: { title: string; value: LaunchpadType | null }[] = [
  {
    title: "All Access",
    value: null
  },
  {
    title: "FCFS",
    value: LaunchpadType.FCFS
  },
  {
    title: "Guaranteed",
    value: LaunchpadType.GUARANTEED
  },
  {
    title: "Community",
    value: LaunchpadType.COMMUNITY
  }
]
