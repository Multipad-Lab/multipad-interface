import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import PaginationStyleWrapper from "./Pagination.style"
import { useEffect, useState } from "react"

const Pagination = ({
  totalPages,
  onChangePage,
  activePage
}: {
  totalPages: number
  activePage: number
  onChangePage?: (page: number) => void
}) => {
  const [pages, setPages] = useState<number[]>([])

  const handleChangePage = (page: number) => {
    onChangePage && onChangePage(page)
  }

  useEffect(() => {
    const newPages: number[] = Array.from(Array(totalPages).keys()).map((item) => Number(item) + 1)
    setPages(newPages)
  }, [totalPages])

  return (
    <PaginationStyleWrapper className='pagination_wrapper'>
      <button disabled={activePage === 1} onClick={() => handleChangePage(activePage - 1)}>
        <FiChevronLeft />
      </button>

      {pages.map((page) => {
        return (
          <button
            key={page}
            className={activePage === page ? "active" : ""}
            onClick={() => page !== activePage && handleChangePage(page)}
          >
            {page}
          </button>
        )
      })}

      <button disabled={activePage === pages.length} onClick={() => handleChangePage(activePage + 1)}>
        <FiChevronRight />
      </button>
    </PaginationStyleWrapper>
  )
}

export default Pagination
