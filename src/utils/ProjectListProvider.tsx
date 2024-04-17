import { createContext } from "react"
type ProjectListProp = {
  searchText: string
  handleChangeSearchText: (search: string) => void
}
export const ProjectListContext = createContext({} as ProjectListProp)

export const ProjectListContextProviver = ProjectListContext.Provider
