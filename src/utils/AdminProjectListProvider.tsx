import { createContext } from "react"
type AdminProjectListProp = {
  searchText: string
  handleChangeSearchText: (search: string) => void
}
export const AdminProjectListContext = createContext({} as AdminProjectListProp)

export const AdminProjectListContextProviver = AdminProjectListContext.Provider
