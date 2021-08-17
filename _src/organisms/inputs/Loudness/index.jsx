import React from "react";
import TargetOrMinMaxRange from "../../../molecules/TargetOrMinMaxRange";
import InputWrapper from "../../../molecules/InputWrapper";

const description = `The overall loudness of a track in decibels (dB). Loudness values
are averaged across the entire track and are useful for comparing
relative loudness of tracks. Loudness is the quality of a sound that
is the primary psychological correlate of physical strength
(amplitude). Values typical range between -60 and 0 db.`;

const Loudness = (props) => {
  return (
    <InputWrapper
      {...props}
      title="Loudness"
      description={description}
      render={(active, setValue) => (
        <TargetOrMinMaxRange
          min={-200}
          max={0}
          minDefault={-20}
          maxDefault={-50}
          onChange={(_value) => setValue(_value)}
          disabled={!active}
        />
      )}
    />
  );
};

export default Loudness;
