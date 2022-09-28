import React from 'react'
import { usePagination } from '../../../hooks/usePagination'
import style from './Pagination.module.css'

const Pagination = ({pagesAmount, activePage, setActivePage}) => {
  // наполняем массив номерами страниц, которые получаем с помощью кастомного хука
  let pagesArray = usePagination(pagesAmount)

  // отрисовывем номера страниц; если страница активная, то задаём соответствующий стиль
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