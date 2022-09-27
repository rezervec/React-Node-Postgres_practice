import { useState } from "react";

export const useFetch = (callback) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchData = async () => {
    try {
      setLoading(true)
      await callback()
    } catch (e) {
      setError(e.message)
    } finally {
      setTimeout(() => {
        setLoading(false)
      }, 500)
    }
  }
  return [fetchData, loading, error]
}
