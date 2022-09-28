const { useMemo } = require("react")

// сортируем ряды таблицы в соответствии с фильтром(выбранная колонка, действие, поле ввода)
const useSortRows = (rows, filter) => {
  const sortTable = useMemo(() => {
    switch (filter.action) {
      case 'equals':
        // ряд попадает в массив если его значение из выбранной колонки === введённому значению (в нижнем регистре)
        return rows.filter(row => row[filter.column].toLowerCase() === filter.input.toLowerCase())
      case 'includes':
        return rows.filter(row => row[filter.column].toLowerCase().includes(filter.input.toLowerCase()))
      case 'more':
        // для корректной сортировки по буквам используем localCompare, а также для сортировки дат
        if(filter.column == 'data' || filter.column == 'title')
          return [...rows].sort((a, b) => a[filter.column].localeCompare(b[filter.column]))
        else
          return [...rows].sort((a, b) => a[filter.column] - b[filter.column])
      case 'less':
        if(filter.column == 'data' || filter.column == 'title')
          return [...rows].sort((a, b) => b[filter.column].localeCompare(a[filter.column]))
        else
          return [...rows].sort((a, b) => b[filter.column] - a[filter.column])
      default:
        return rows
    }
  }, [rows, filter])
  // возвращаем отсортированный массив 
  return sortTable
}

export const useSort = (rows, filter, activePage, limitRows, {setPagesAmount}) => {

  const sortTable = useSortRows(rows, filter)
  // определяем страницы для отсортированных рядов таблицы
  const sortLimit = useMemo(() => {
    // получаем кол-во страниц, разделив кол-во рядов в осортированном массиве на кол-во рядов на странице
    setPagesAmount(Math.ceil(sortTable.length / limitRows))
    // определяем индекс первого и второго ряда на активной странице
    const firstRow = ((activePage - 1) * limitRows)
    const lastRow = activePage * limitRows - 1
    // возвращаем те ряды, чей индекс соответствует активной странице, в количестве limitRows
    const rowsOnPage = sortTable.filter((row, index) => index >= firstRow & index <= lastRow)
    return rowsOnPage
  }, [activePage, rows, filter])

  return sortLimit
}