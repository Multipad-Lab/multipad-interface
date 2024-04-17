import { FiSearch } from "react-icons/fi"
import titleShape from "src/assets/images/icons/steps.png"
import PageHeaderStyleWrapper from "./PageHeader.style"
import { useCallback, useContext, useState } from "react"
import { AdminProjectListContext } from "src/utils/AdminProjectListProvider"
import { debounce } from "lodash"
import { routesName } from "src/const/routes"
import { Link } from "react-router-dom"

const PageHeader = ({ currentPage, pageTitle }: any) => {
  const { handleChangeSearchText } = useContext(AdminProjectListContext)
  const [search, setSearch] = useState("")
  const debouncedSearch = useCallback(
    debounce((value) => handleChangeSearchText(value), 1000),
    []
  )

  return (
    <PageHeaderStyleWrapper>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-5'>
            <div className='breadcrumb_area'>
              <div className='breadcrumb_menu'>
                <>
                  <Link to={routesName.ROOT}>Home</Link> <span>.</span> {currentPage && currentPage}
                </>
                <img className='heading_shape' src={titleShape} alt='heading shape' />
              </div>
              <h2 className='breadcrumb_title text-uppercase'>{pageTitle && pageTitle}</h2>
            </div>
          </div>

          <div className='col-lg-7'>
            <div className='breadcrumb_form'>
              <div className='breadcrumb_form_input'>
                <input
                  type='text'
                  placeholder='Search by name, token, address'
                  value={search}
                  onChange={(event) => {
                    setSearch(event.target.value)
                    debouncedSearch(event.target.value)
                  }}
                />
                <button onClick={() => handleChangeSearchText(search)}>
                  <FiSearch />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageHeaderStyleWrapper>
  )
}

export default PageHeader
