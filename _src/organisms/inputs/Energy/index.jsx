import React from "react";
import TargetOrMinMaxRange from "../../../molecules/TargetOrMinMaxRange";
import InputWrapper from "../../../molecules/InputWrapper";

const description = `Energy is a measure from 0.0 to 1.0 and represents a perceptual
measure of intensity and activity. Typically, energetic tracks feel
fast, loud, and noisy. For example, death metal has high energy,
while a Bach prelude scores low on the scale. Perceptual features
contributing to this attribute include dynamic range, perceived
loudness, timbre, onset rate, and general entropy.`;

const Energy = (props) => {
  return (
    <InputWrapper
      {...props}
      title="Energy"
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

export default Energy;
