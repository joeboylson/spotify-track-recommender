import { get } from "axios";

export const getRecommendations = (_params, callback) => {
  const params = {
    ..._params,
    seed_tracks: _params.seed_tracks.join(','),
    seed_artists: _params.seed_artists.join(','),
    seed_genres: _params.seed_genres.join(','),
  }

  get('/api/recommendations', { params }).then(({data}) => {
    if (!data.success) return callback([]);
    callback(data.data.tracks);
  });
};