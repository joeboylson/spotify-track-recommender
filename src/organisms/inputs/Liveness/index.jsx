import React from "react";
import TargetOrMinMaxRange from "../../../molecules/TargetOrMinMaxRange";
import InputWrapper from "../../../molecules/InputWrapper";

const description = `Detects the presence of an audience in the recording. Higher
liveness values represent an increased probability that the track
was performed live. A value above 0.8 provides strong likelihood
that the track is live.`;

const Liveness = (props) => {
  return (
    <InputWrapper
      {...props}
      title="Liveness"
      description={description}
      render={(active, setValue) => (
        <TargetOrMinMaxRange
          min={0}
          max={1}
          minDefault={0.25}
          maxDefault={0.75}
          onChange={(_value) => setValue(_value)}
          disabled={!active}
        />
      )}
    />
  );
};

export default Liveness;
