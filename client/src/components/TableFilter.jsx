import React from 'react'
import SelectAction from './select/SelectAction'
import SelectColumn from './select/SelectColumn'
import style from '../styles/MainPage.module.css'

const TableFilter = ({filter, setFilter}) => {
  return (
    <div className={style.search}>
      <h3>Сортировать:</h3>
      <SelectColumn
        value={filter.column}
        onChange = {e => setFilter({...filter, column: e})}
        options = {[
          {value: 'data', name: 'Дата'},
          {value: 'title', name: 'Название'},
          {value: 'amount', name: 'Количество'},
          {value: 'distance', name: 'Расстояние'},
        ]}
      />
      <SelectAction
        value={filter.action}
        onChange = {e => setFilter({...filter, action: e})}
        options = {filter.column != ''
        ? [
            {value: 'equals', name: 'Ровно'},
            {value: 'includes', name: 'Содержит'},
            {value: 'more', name: 'Больше'},
            {value: 'less', name: 'Меньше'},
          ]
        : []
        }
      />
      <input
        placeholder="Значение"
        value={filter.input}
        onChange={e => setFilter({...filter, input: e.target.value})}
      />
    </div>
  )
}

export default TableFilter