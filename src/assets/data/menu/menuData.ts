import { routesName } from "src/const/routes"

interface MenuData {
  id: string
  title: string
  url: string
  subMenus: (
    | {
        id: string
        title: string
        url: string
        subMenuChilds: {
          id: string
          title: string
          url: string
        }[]
      }
    | {
        id: string
        title: string
        url: string
        subMenuChilds?: undefined
      }
  )[]
}

const data: MenuData[] = [
  {
    id: "1W6WV",
    title: "Home",
    url: routesName.ROOT,
    subMenus: []
  },
  {
    id: "2ZYYU",
    title: "Projects",
    url: routesName.PROJECTS,
    subMenus: []
  },
  {
    id: "435U5",
    title: "Staking",
    url: routesName.STAKING,
    subMenus: []
  },
  {
    id: "ZZUVV",
    title: "Farming",
    url: routesName.FARMING,
    subMenus: []
  },
  {
    id: "AKK5A",
    title: "PrivateSale",
    url: routesName.PRIVATE_SALE,
    subMenus: []
  }
]

export default data
