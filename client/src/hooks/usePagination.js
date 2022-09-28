import { useMemo } from "react"

// создаём массив с номерами страниц
export const usePagination = (pagesAmount) => {
  const pagination = useMemo(() => {
    let pagesArray = []
    for(let i = 0; i < pagesAmount; i++) {
      pagesArray.push(i + 1)
    }
    return pagesArray
  }, [pagesAmount]) // обновляем массив при изменении кол-ва страниц
  
  return pagination
}