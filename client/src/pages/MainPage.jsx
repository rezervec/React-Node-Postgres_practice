import React, { useMemo } from 'react'
import style from '../styles/MainPage.module.css'
import { getElems } from '../actions/request'
import { useState } from 'react'
import { useEffect } from 'react'
import TableFilter from '../components/TableFilter'
import { useFetch } from '../hooks/useFetch'
import { useSort } from '../hooks/useSort'

const MainPage = () => {

  const [elementRow, setElementRow] = useState([])
  // const [minLimit, setMinLimit] = useState(1)
  // const [maxLimit, setMaxLimit] = useState(5)
  const [filter, setFilter] = useState({column:'', action:'', input:''})

  // const getLimitElems = async (arr) => {
  //   const limitArr = await arr.filter(el => el.id >= minLimit & el.id <= maxLimit)
  //   setElementRow(limitArr)
  // }

  const [fetchData, loading, error] = useFetch(async () => {
    const data = await getElems()
    setElementRow(data)
  })

  useEffect(() => {
    fetchData()
  }, [])


  const sortedElems = useSort(elementRow, filter.column, filter.action, filter.input)

  return (
    <div className='bodyPage'>
      <div className={style.table}>
        <div className={style.table_header}>
          <p className={style.table_header_elem}>Дата</p>
          <p className={style.table_header_elem}>Название</p>
          <p className={style.table_header_elem}>Количество</p>
          <p className={style.table_header_elem}>Расстояние</p>
        </div>
        {loading
        ? <div>loading...</div>
        : <div>
            {sortedElems.map(el =>
              <div className={style.table_body} key={el.id}>
                <p className={style.table_body_elem}>{el.data}</p>
                <p className={style.table_body_elem}>{el.title}</p>
                <p className={style.table_body_elem}>{el.amount}</p>
                <p className={style.table_body_elem}>{el.distance}</p>
              </div>
            )}
          </div>
        }
        {error &&
          <div>Произошла ошибка: {error}</div>
        }
      </div>
        <TableFilter
          filter={filter}
          setFilter={setFilter}
        />
    </div>
  )
}

export default MainPage