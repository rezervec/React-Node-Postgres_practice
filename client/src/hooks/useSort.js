const { useMemo } = require("react")

export const useSort = (elements, column, action, input) => {
  const sortTable = useMemo(() => {
    switch (action) {
      case 'equals':
        return elements.filter(el => el[column] === input)
      case 'includes':
        return elements.filter(el => el[column].includes(input))
      case 'more':
        return [...elements].sort((a, b) => a[column].localeCompare(b[column]))
      case 'less':
        return [...elements].sort((a, b) => b[column].localeCompare(a[column]))
      default:
        return elements
    }
  }, [elements, column, action, input])

  return sortTable
}