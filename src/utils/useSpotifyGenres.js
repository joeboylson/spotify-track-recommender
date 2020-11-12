import axios from 'axios';

export const useSpotifyGenres = () => {

  return axios.get('/api/genres')
  .then(results => {
    try {
      return results.data.data
    } catch {
      return [];
    }
  })

}