import { get } from "axios";

export const getTracksAudioFeatures = (ids, callback) => {

  const params = { ids: ids.join(',') }
  get('/api/audio-features', { params }).then(({data}) => {
    if (!data.success) return callback([]);
    callback(data.data);
  });
};