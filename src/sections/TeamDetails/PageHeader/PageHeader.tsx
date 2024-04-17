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
        </div>
      </div>
    </PageHeaderStyleWrapper>
  )
}

export default PageHeader
