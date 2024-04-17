import { useState } from "react"

export const useProjectListSearch = () => {
  const [searchText, setSearchText] = useState("")

  const handleChangeSearchText = (value: string) => {
    setSearchText(value)
  }
  return {
    searchText,
    handleChangeSearchText
  }
}
