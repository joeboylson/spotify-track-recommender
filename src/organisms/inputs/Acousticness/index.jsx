import React from "react";
import TargetOrMinMaxRange from "../../../molecules/TargetOrMinMaxRange";
import InputWrapper from "../../../molecules/InputWrapper";

const description = `A confidence measure from 0.0 to 1.0 of whether the track is
acoustic. 1.0 represents high confidence the track is acoustic.`;

const Acousticness = (props) => {
  return (
    <InputWrapper
      {...props}
      title="Acousticness"
      description={description}
      render={(active, onChange) => (
        <TargetOrMinMaxRange
          min={0}
          max={1}
          minDefault={0.25}
          maxDefault={0.75}
          onChange={i => onChange(i)}
          disabled={!active}
        />
      )}
    />
  );
};

export default Acousticness;
