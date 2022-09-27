import React from 'react'
import { usePagination } from '../../../hooks/usePagination'
import style from './Pagination.module.css'

const Pagination = ({pagesAmount, activePage, setActivePage}) => {
  let pagesArray = usePagination(pagesAmount)

  return (
    <div className={style.pagination}>
      {pagesArray.map(page =>
        <span
          key={page}
          onClick={() => setActivePage(page)}
          className={page === activePage ? style.activePage : style.allPages}
        >
          {page}
        </span>
      )}
    </div>
  )
}

export default Pagination