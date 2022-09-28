import React from 'react'
import style from '../styles/MainPage.module.css'

// отрисовывем шапку таблицы и полученные ряды
// если рядов нет, то мы оповещаем об этом
const Rows = ({rows}) => {
    return (
      <div className={style.table}>
        <div className={style.table_header}>
          <p className={style.table_header_elem}>Дата</p>
          <p className={style.table_header_elem}>Название</p>
          <p className={style.table_header_elem}>Количество</p>
          <p className={style.table_header_elem}>Расстояние</p>
        </div>
        {rows.length > 0
          ? <div>
              {rows.map(row =>
                <div className={style.table_body} key={row.id}>
                  <p className={style.table_body_elem}>{row.data}</p>
                  <p className={style.table_body_elem}>{row.title}</p>
                  <p className={style.table_body_elem}>{row.amount}</p>
                  <p className={style.table_body_elem}>{row.distance}</p>
                </div>
              )}
            </div> 
          : <div>Рядов нет</div>
        }
      </div>
    )
}

export default Rows