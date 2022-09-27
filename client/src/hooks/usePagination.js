import { useMemo } from "react"

export const usePagination = (pagesAmount) => {
  const pagination = useMemo(() => {
    let pagesArray = []
    for(let i = 0; i < pagesAmount; i++) {
      pagesArray.push(i + 1)
    }
    return pagesArray
  }, [pagesAmount])
  
  return pagination
}