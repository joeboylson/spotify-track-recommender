import React, { useCallback, useMemo, useReducer } from "react";
import { isEmpty, range, reject, snakeCase } from "lodash";
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

import TrackSelector from "../../molecules/TrackSelector";

import { getRecommendations } from "../../utils/getRecommendations";
import { useHistory } from "react-router-dom";
import GenreSelect from "../../molecules/GenreSelect";
import { Send } from "@material-ui/icons";

import {
  Fab,
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from "@material-ui/core";

import {
  RecommendationsFormSection,
  RecommendationsFormWrapper,
  SubmitButtonWrapper,
} from "./StyledComponents";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import SearchAndSelectTracks from "./steps/SearchAndSelectTracks";
import AdjustMoodAndFeeling from "./steps/AdjustMoodAndFeeling";

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
    case "SET_MIN_MAX":
      const minKey = snakeCase(`min_${key}`);
      const maxKey = snakeCase(`max_${key}`);
      const targetKey = snakeCase(`target_${key}`);

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

    case "SET_KEY":
      state[key] = value;
      state = removeEmpty(state);
      return state;

    case "SET_KEY_AT_INDEX":
      state[key][index] = value;
      state[key] = reject(state[key], isEmpty);
      state = removeEmpty(state);

      return state;

    default:
      throw new Error();
  }
};

const RecommendationsForm = () => {
  
  const history = useHistory();

  // Reducer state controls
  const [state, dispatch] = useReducer(reducer, initialState);

  const setMinMax = (key) => {
    const type = "SET_MIN_MAX";
    return (value) => dispatch({ type, payload: { key, value } });
  };

  const setKey = (key) => {
    const type = "SET_KEY";
    return (value) => dispatch({ type, payload: { key, value } });
  };

  const setKeyAtIndex = (key, index) => {
    const type = "SET_KEY_AT_INDEX";
    return (value) => dispatch({ type, payload: { key, value, index } });
  };

  const submit = () => {
    getRecommendations(state, (tracks) => {
      if (!tracks) return;

      window.localStorage.setItem("tracks", JSON.stringify(tracks));
      history.push("/tracks");
    });
  };

  // TODO: move to react-hook-forms
  const selectedTracks = useMemo(() => state["seed_tracks"], [state]);
  const submitButtonIsDisabled = useMemo(
    () => selectedTracks.length < 1,
    [selectedTracks]
  );

    // Stepper Controls
  const [step, setStep] = useState(0);

  const { control, register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  const renderRefineControls = useCallback(() => (
    <RecommendationsFormSection>
    <GenreSelect onChange={setKeyAtIndex("seed_genres", 0)} />
    <Acousticness onChange={setMinMax("acousticness")} />
    <Danceability onChange={setMinMax("danceability")} />
    <Energy onChange={setMinMax("energy")} />
    <Instrumentalness onChange={setMinMax("instrumentalness")} />
    <Liveness onChange={setMinMax("liveness")} />
    <Loudness onChange={setMinMax("loudness")} />
    <Speechiness onChange={setMinMax("speechiness")} />
    <Valence onChange={setMinMax("valence")} />

    <DurationMs onChange={setMinMax("duration_ms")} />
    <Popularity onChange={setMinMax("popularity")} />
    <Tempo onChange={setMinMax("tempo")} />
    <TimeSignature onChange={setMinMax("time_signature")} />

    {/* 
    TODO: fix these inputs
    <Key onChange={setKey("key")} />
    <Mode onChange={setKey("mode")} /> 
    */}
  </RecommendationsFormSection>
  ), []);

  const stepProps = useMemo(() => ({
    control
  }), [control])

  const steps = [
    {
      label: "Search & Select Tracks",
      checkHasError: () => step === 0 ? false : submitButtonIsDisabled,
      Content: () => <SearchAndSelectTracks {...stepProps}/>
    },
    {
      label: "Refine Search (optional)",
      checkHasError: () => false,
      Content: () => <AdjustMoodAndFeeling {...stepProps}/>
    },
  ];

  return (
    <RecommendationsFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Stepper activeStep={step} orientation="vertical">
        {steps.map((step, i) => {
          const { Content, label, checkHasError } = step;
          const hasError = checkHasError(step, i);

          return (
            <Step key={label}>
              <StepLabel onClick={() => setStep(i)} error={hasError}>
                <h1>{label}</h1>
              </StepLabel>
              <StepContent>
                <Content />
              </StepContent>
            </Step>
          );
        })}
      </Stepper>

      <SubmitButtonWrapper>
        <Fab size="small" color="primary" onClick={submit} disabled={submitButtonIsDisabled}>
          <Send />
        </Fab>
      </SubmitButtonWrapper>
    </RecommendationsFormWrapper>
  );
};

export default RecommendationsForm;
