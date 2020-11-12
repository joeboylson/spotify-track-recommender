import axios from 'axios'

export const useRecommendations = (params) => {

  return axios.get('/api/recommendations', {params})
  .then(results => {
    try {
      return results.data.data.tracks
    } catch {
      return [];
    }
  })

}