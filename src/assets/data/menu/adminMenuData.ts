import { routesName } from "src/const/routes"
import data from "./menuData"

export const adminMenuData = [
  ...data,
  {
    id: "ZZUVVU",
    title: "Admin",
    url: routesName.ADMIN_PROJECTS,
    subMenus: []
  }
]
