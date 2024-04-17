import { BiCalendar } from "react-icons/bi"
import Button from "src/components/button"
import { FiSearch } from "react-icons/fi"
import titleShape from "src/assets/images/icons/steps.png"
import PageHeaderStyleWrapper from "./PageHeader.style"
import { useCallback, useContext, useState } from "react"
import { ProjectListContext } from "src/utils/ProjectListProvider"
import { debounce } from "lodash"
import { Link } from "react-router-dom"
import { routesName } from "src/const/routes"

const PageHeader = ({ currentPage, pageTitle }: any) => {
  const { handleChangeSearchText } = useContext(ProjectListContext)
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
                <img className='heading_shape' src={titleShape} alt='bithu nft heading shape' />
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
              <Button sm variant='dark' href={routesName.PROJECT_CALENDAR}>
                <BiCalendar />
                Calender
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageHeaderStyleWrapper>
  )
}

export default PageHeader
