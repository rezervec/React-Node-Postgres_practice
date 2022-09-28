import React from 'react'
import { getRows } from '../actions/request'
import { useState } from 'react'
import { useEffect } from 'react'
import TableFilter from '../components/TableFilter'
import { useFetch } from '../hooks/useFetch'
import { useSort } from '../hooks/useSort'
import Rows from '../components/Rows'
import Loader from '../components/UI/loader/Loader'
import Pagination from '../components/UI/pagination/Pagination'

const MainPage = () => {

  const [rows, setRows] = useState([]) // массив с нашими рядами таблицы
  const [limitRows, setLimitRows] = useState(5) // кол-во рядов на странице
  const [filter, setFilter] = useState({column:'', action:'', input:''}) // данные фильтрации рядов
  const [pagesAmount, setPagesAmount] = useState(0) // кол-во страниц
  const [activePage, setActivePage] = useState(1) // активная страница

  // получаем данные и состояние промиса с помощью кастомного хука useFetch
  const [fetchData, loading, error] = useFetch(async () => {
    // getRows отправляет get-запрос на сервис и возвращает массив с нашими рядами
    const data = await getRows()
    // записываем полученные ряды в rows
    setRows(data)
  })

  useEffect(() => {
    // в 'loading' будет хранится состояние промиса, в 'error' ошибки
    fetchData()
  }, [])

  // вызовим кастомный хук, который запишет отсортированный массив, на основаниии фильтров,
  // а также хук вернёт количество страниц после сортировки
  const sortedRows = useSort(rows, filter, activePage, limitRows, {setPagesAmount})

  return (
    <div>
      {loading
      ? <Loader/>
      : <Rows rows={sortedRows}/>
      }
      {error &&
        <div>Произошла ошибка: {error}</div>
      }
      <Pagination
        pagesAmount={pagesAmount}
        setActivePage={setActivePage}
        activePage={activePage}
      />
      <TableFilter
        filter={filter}
        setFilter={setFilter}
      />
    </div>
  )
}

export default MainPage