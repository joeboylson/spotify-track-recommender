import React, { useCallback, useMemo } from "react";
import { useHistory } from "react-router-dom";
import { Block, Send } from "@material-ui/icons";

import { Fab, Step, Stepper, StepLabel, StepContent } from "@material-ui/core";

import {
  Instructions,
  RecommendationsFormWrapper,
  SubmitButtonWrapper,
} from "./StyledComponents";
import { useState } from "react";
import { useForm } from "react-hook-form";
import SearchAndSelectTracks from "./steps/SearchAndSelectTracks";
import AdjustMoodAndFeeling from "./steps/AdjustMoodAndFeeling";
import AdjustTechnicalParameters from "./steps/AdjustTechnicalParameters";
import { useAudioFeaturesMinMax } from "../../hooks/useAudioFeaturesMinMax";
import { isEmpty } from "lodash";
import { getRecommendations } from "../../utils/getRecommendations";
import { getLocalStorage, setLocalStorage } from "../../utils/localStorage";

const RecommendationsForm = () => {
  const [step, setStep] = useState(0);
  const history = useHistory();

  const savedDefaultFormValues = getLocalStorage("formValues")

  const { watch, getValues, setValue } = useForm({
    mode: "onChange",
    defaultValues: {
      limit: 30,
      ...savedDefaultFormValues
    }
  });

  const tracks = watch("seed_tracks")
  const { audioFeaturesMinMax, loading } = useAudioFeaturesMinMax(tracks);
  const hasNoTracks = isEmpty(tracks);

  const submit = () => {
    const formValues = getValues();
    getRecommendations(formValues, searchedTracks => {
      if (!tracks) return;
      setLocalStorage("playlistTracks", [...tracks, ...searchedTracks]);
      setLocalStorage("formValues", formValues);
      history.push("/tracks")
    });
  };

  const getDefaultValueProps = useCallback(
    (fieldName, fallback) => {
      const _values = getValues();
      const _value = _values[fieldName];

      if (!_value) {
        const defaultValue = fallback || Object.values(audioFeaturesMinMax[fieldName])
        return { isDirty: false, defaultValue };
      }

      return { isDirty: true, defaultValue: _value };
    },
    [getValues, audioFeaturesMinMax]
  );

  const stepProps = useMemo(
    () => ({
      watch,
      setValue,
      getDefaultValueProps,
    }),
    [setValue, getDefaultValueProps, watch]
  );

  const steps = [
    {
      label: "Search & Select Tracks",
      Content: () => <SearchAndSelectTracks {...stepProps} />,
    },
    {
      label: "Mood and Feeling",
      disabled: loading || hasNoTracks,
      Content: () => <AdjustMoodAndFeeling {...stepProps} />,
    },
    {
      label: "Technical Parameters",
      disabled: loading || hasNoTracks,
      Content: () => <AdjustTechnicalParameters {...stepProps} />,
    },
  ];

  return (
    <RecommendationsFormWrapper>

      <Instructions>
        <h3>Hey there,</h3>
        <p>
          This is a website designed to help you generate a playlist of
          songs that sound similar to the songs you know and love.
        </p>
        <p>
          To begin, select at least 1 track (or a maximum of 5 tracks).
        </p>
        <p>
          You can generate a playlist just off of your selected track(s)
          or you can dive deeper into refining your search by adjusting the
          sliders in the "Mood and Feeling" and "Technical Parameters" sections.
        </p>
        <p>
          Once you're done, hit the arrow in the bottom right corner of your screen. This will take you to a new page with
          your recommendations; from there, you can choose to save your songs.
        </p>
      </Instructions>
      
      <Stepper activeStep={step} orientation="vertical">
        {steps.map((step, i) => {
          const { Content, label } = step;

          return (
            <Step key={label} disabled={step.disabled}>
              <StepLabel 
                onClick={step.disabled ? null : () => setStep(i)} 
                icon={step.disabled ? <Block htmlColor="#c3c3c3"/> : null}
              >
                <h2 className={step.disabled ? "disabled" : ""}>{label}</h2>
              </StepLabel>
              <StepContent>
                <Content />
              </StepContent>
            </Step>
          );
        })}
      </Stepper>

      <SubmitButtonWrapper>
        <Fab
          size="small"
          color="primary"
          onClick={submit}
          disabled={hasNoTracks}
        >
          <Send />
        </Fab>
      </SubmitButtonWrapper>
    </RecommendationsFormWrapper>
  );
};

export default RecommendationsForm;
