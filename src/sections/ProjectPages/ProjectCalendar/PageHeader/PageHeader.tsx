import Button from "src/components/button"
import { CgMenuMotion } from "react-icons/cg"
import titleShape from "src/assets/images/icons/steps.png"
import PageHeaderStyleWrapper from "./PageHeader.style"
import { routesName } from "src/const/routes"
import { Link } from "react-router-dom"

const PageHeader = ({ currentPage, pageTitle }: any) => {
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
              <Button sm variant='dark' href={routesName.PROJECTS}>
                <CgMenuMotion />
                List View
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageHeaderStyleWrapper>
  )
}

export default PageHeader
