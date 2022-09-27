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

  const [rows, setRows] = useState([])
  const [limitRows, setLimitRows] = useState(5)
  const [filter, setFilter] = useState({column:'', action:'', input:''})
  const [pagesAmount, setPagesAmount] = useState(3)
  const [activePage, setActivePage] = useState(1)

  const [fetchData, loading, error] = useFetch(async () => {
    const data = await getRows()
    setPagesAmount(Math.ceil(data.length / limitRows))
    setRows(data)
  })

  useEffect(() => {
    fetchData()
  }, [])

  let sortedRows = useSort(rows, filter, activePage, limitRows)

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