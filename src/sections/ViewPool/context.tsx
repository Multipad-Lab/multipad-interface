import { createContext } from "react"

type ViewPoolDetailsContextProps = {
  onRefeshLaunchpadData: () => void
  changeDataFlag: boolean
  setChangeDataFlag: (value: boolean) => void
}
export const ViewPoolDetailsContext = createContext<ViewPoolDetailsContextProps>({} as ViewPoolDetailsContextProps)

export const ViewPoolDetailsContextProvider = ViewPoolDetailsContext.Provider
