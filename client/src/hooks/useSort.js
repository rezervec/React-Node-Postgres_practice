const { useMemo } = require("react")

const useSortRows = (rows, filter) => {
  const sortTable = useMemo(() => {
    switch (filter.action) {
      case 'equals':
        return rows.filter(el => el[filter.column].toLowerCase() === filter.input.toLowerCase())
      case 'includes':
        return rows.filter(el => el[filter.column].toLowerCase().includes(filter.input.toLowerCase()))
      case 'more':
        return [...rows].sort((a, b) => a[filter.column].localeCompare(b[filter.column]))
      case 'less':
        return [...rows].sort((a, b) => b[filter.column].localeCompare(a[filter.column]))
      default:
        return rows
    }
  }, [rows, filter])

  return sortTable
}

export const useSort = (rows, filter, activePage, limitRows, setPagesAmount) => {
  const sortTable = useSortRows(rows, filter)

  const sortLimit = useMemo(() => {
    const firstRow = ((activePage - 1) * limitRows)
    const lastRow = activePage * limitRows - 1
    const rowsOnPage = sortTable.filter((row, index) => index >= firstRow & index <= lastRow)
    return rowsOnPage
  }, [activePage, rows, filter])

  return sortLimit
}