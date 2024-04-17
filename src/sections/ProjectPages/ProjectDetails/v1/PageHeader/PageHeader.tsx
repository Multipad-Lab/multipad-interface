import titleShape from "src/assets/images/icons/steps.png"
import PageHeaderStyleWrapper from "./PageHeader.style"
import { routesName } from "src/const/routes"
import { Link } from "react-router-dom"
import Button from "src/components/button"

const PageHeader = ({ currentPage, projectDetailslUrl }: { currentPage?: string; projectDetailslUrl?: string }) => {
  return (
    <PageHeaderStyleWrapper className='page_header_wrapper'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-12'>
            <div className='breadcrumb_area d-flex justify-content-between flex-wrap'>
              <div className='breadcrumb_menu'>
                <Link to={routesName.ROOT}>
                  Home <span>.</span>{" "}
                </Link>
                <Link to={routesName.PROJECTS}>
                  Projects <span>.</span>{" "}
                </Link>
                {projectDetailslUrl && (
                  <Link to={projectDetailslUrl}>
                    Project Details <span>.</span>{" "}
                  </Link>
                )}
                <p>{currentPage && currentPage}</p>
                <img className='heading_shape' src={titleShape} alt='multipad heading shape' />
              </div>
              <div className='breadcrumb_form'>
                <Button sm variant='dark' href='# '>
                  ALLOWLIST OPEN
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageHeaderStyleWrapper>
  )
}

export default PageHeader
