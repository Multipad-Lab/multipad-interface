export type ProjectFilterAccessEnum = "all" | "public" | "private" | "community"
export type ProjectFilterType = {
  tab: ProjectStatusType
  access: ProjectFilterAccessEnum
  chainId: number | undefined
  searchText: string
}

export enum ProjectStatusLabelEnum {
  OPEN = "Open IDO",
  UPCOMMING = "Upcomming",
  PAST = "Past IDO"
}
export type ProjectStatusType = "open" | "upcomming" | "past"
export type ProjectItemType = {
  id: number
  thumb: string
  title: string
  price: string
  launchedDate: string
  totalRised: string
  progress: string
  coinIcon: string
  projectStatus: ProjectStatusType
}
