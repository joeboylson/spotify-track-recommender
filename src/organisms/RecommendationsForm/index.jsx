import { isEmpty, reject, snakeCase } from "lodash";
import React, { useReducer } from "react";
import Acousticness from "../inputs/Acousticness";
import Danceability from "../inputs/Danceability";
import DurationMs from "../inputs/DurationMs";
import Energy from "../inputs/Energy";
import Instrumentalness from "../inputs/Instrumentalness";
import Key from "../inputs/Key";
import Liveness from "../inputs/Liveness";
import Loudness from "../inputs/Loudness";
import Mode from "../inputs/Mode";
import Popularity from "../inputs/Popularity";
import Speechiness from "../inputs/Speechiness";
import Tempo from "../inputs/Tempo";
import TimeSignature from "../inputs/TimeSignature";
import Valence from "../inputs/Valence";

import TrackSelector from '../../molecules/TrackSelector';

import { getRecommendations } from "../../utils/getRecommendations";
import { RecommendationsFormWrapper } from "./StyledComponents";

const initialState = {
  seed_artists: [],
  seed_tracks: [],
  seed_genres: [],
};

function removeEmpty(obj) {
  return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null));
}

const reducer = (state, action) => {
  const { key, value, index } = action.payload;
  switch (action.type) {

    case 'SET_MIN_MAX':
      const minKey = snakeCase(`min_${key}`)
      const maxKey = snakeCase(`max_${key}`)
      const targetKey = snakeCase(`target_${key}`)
      
      if (!value) {
        state[minKey] = null;
        state[maxKey] = null;
        state[targetKey] = null;
      } else if (value.min === value.max) {
        state[minKey] = null;
        state[maxKey] = null;
        state[targetKey] = value.min;
      } else {
        state[minKey] = value.min;
        state[maxKey] = value.max;
        state[targetKey] = null;
      }

      state = removeEmpty(state);
      return state;

    case 'SET_KEY':
      state[key] = value;
      state = removeEmpty(state);
      return state;

    case 'SET_KEY_AT_INDEX':
      state[key][index] = value;
      state[key] = reject(state[key], isEmpty);
      state = removeEmpty(state);

      console.log(state)

      return state;

    default:
      throw new Error();
  }
}

const RecommendationsForm = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const setMinMax = (key) => {
    const type = "SET_MIN_MAX";
    return (value) => dispatch({type, payload: { key, value }})
  }

  const setKey = (key) => {
    const type = "SET_KEY";
    return (value) => dispatch({type, payload: { key, value }})
  }

  const setKeyAtIndex = (key, index) => {
    const type = "SET_KEY_AT_INDEX";
    return (value) => dispatch({type, payload: { key, value, index }})
  }

  const submit = () => {
    getRecommendations(state);
  }

  return (
    <RecommendationsFormWrapper>
      <TrackSelector onChange={setKeyAtIndex('seed_tracks', 0)}/>
      <TrackSelector onChange={setKeyAtIndex('seed_tracks', 1)}/>
      <TrackSelector onChange={setKeyAtIndex('seed_tracks', 2)}/>
      <TrackSelector onChange={setKeyAtIndex('seed_tracks', 3)}/>
      <TrackSelector onChange={setKeyAtIndex('seed_tracks', 4)}/>

      <Acousticness onChange={setMinMax('acousticness')} />
      <Danceability onChange={setMinMax('danceability')} />
      <Energy onChange={setMinMax('energy')} />
      <Instrumentalness onChange={setMinMax('instrumentalness')} />
      <Liveness onChange={setMinMax('liveness')} />
      <Loudness onChange={setMinMax('loudness')} />
      <Speechiness onChange={setMinMax('speechiness')} />
      <Valence onChange={setMinMax('valence')} />

      <hr />

      <Key onChange={setKey('key')} />
      <Mode onChange={setKey('mode')} />
      <DurationMs onChange={setMinMax('duration_ms')} />
      <Popularity onChange={setMinMax('popularity')} />
      <Tempo onChange={setMinMax('tempo')} />
      <TimeSignature onChange={setMinMax('time_signature')} />

      <button onClick={submit}>SUBMIT</button>
    </RecommendationsFormWrapper>
  );
};

export default RecommendationsForm;