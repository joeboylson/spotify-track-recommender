import { get } from "axios";
import { sliderKeys } from "../constants/slider";
import { removeEmpty } from "./object";

export const getRecommendations = (_params, callback) => {
  const paramsWithoutEmpty = removeEmpty(_params)
  const params = Object.entries(paramsWithoutEmpty).reduce( (acc, current) => {

    const [key, value] = current;

    // split slider values into "min_" and "max_" values
    if (sliderKeys.includes(key)) {
      const [min, max] = value;
      if (key === "duration_ms") {
        acc = {
          ...acc,
          [`min_${key}`]: min.toFixed(),
          [`max_${key}`]: max.toFixed()
        }
      } else {
        acc = {
          ...acc,
          [`min_${key}`]: min,
          [`max_${key}`]: max
        }
      }
    }

    // change mode to 0 or 1 for major or minor respectively
    else if (key === "mode") {
      const mode = value === "major" ? 0 : 1
      acc = {...acc, mode}
    }

    // turn seed tracks into seed track ids
    else if (key === "seed_tracks") {
      const seedTracks = value.map(t => t.id).join(',')
      acc = {...acc, seed_tracks: seedTracks}
    }

    else {
      acc = {...acc, [key]: value}
    }

    return acc;
  }, {} )

  get('/api/recommendations', { params }).then(({data}) => {
    if (!data.success) return callback([]);
    callback(data.data.tracks);
  });
};