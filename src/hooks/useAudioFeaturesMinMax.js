import {
  useEffect,
  useState
} from "react"
import {
  get
} from "axios"

const analyzeAudioFeatures = (data) => {
  return data.reduce((acc, trackFeatures) => {
    Object.entries(trackFeatures).forEach(([key, value]) => {
      if (isNaN(value)) return;
      if (acc[key]) {
        acc[key] = {
          min: Math.min(acc[key].min, value),
          max: Math.max(acc[key].min, value),
        }
      } else acc = {
        [key]: {
          min: value,
          max: value
        },
        ...acc
      }
    })
    return acc;
  }, {})
}

export const useAudioFeaturesMinMax = (tracks) => {
  const [audioFeaturesMinMax, setAudioFeaturesMinMax] = useState(null);
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    if (!tracks || tracks.length === 0) {
      setLoading(false);
      return;
    }

    setLoading(true)
    const params = {
      ids: tracks.map(t => t.id).join(',')
    }
    get('/api/audio-features', {
      params
    }).then(({
      data
    }) => {
      const _audioFeaturesMinMax = analyzeAudioFeatures(data.data)
      setAudioFeaturesMinMax(_audioFeaturesMinMax);
      setLoading(false);
    });
  }, [tracks])

  return {
    loading,
    audioFeaturesMinMax
  }
};