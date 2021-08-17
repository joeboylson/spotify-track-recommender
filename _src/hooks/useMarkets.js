import { useEffect, useState } from "react"
import { get } from "axios"

export const useMarkets = () => {

  const [markets, setMarkets] = useState();
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    get('/api/markets').then(({data}) => {
      setMarkets(data.data);
      setLoading(false);
    })
  }, [])

  return { loading, markets }
};