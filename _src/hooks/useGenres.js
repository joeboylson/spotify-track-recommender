import { useEffect, useState } from "react"
import { get } from "axios"

export const useGenres = () => {

  const [genres, setGenres] = useState();
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    get('/api/genres').then(({data}) => {
      setGenres(data.data);
      setLoading(false);
    })
  }, [])

  return { loading, genres }
};