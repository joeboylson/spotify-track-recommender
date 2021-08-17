import React from "react";
import TargetOrMinMaxRange from "../../../molecules/TargetOrMinMaxRange";
import InputWrapper from "../../../molecules/InputWrapper";

const description = `Predicts whether a track contains no vocals. “Ooh” and “aah” sounds
are treated as instrumental in this context. Rap or spoken word
tracks are clearly “vocal”. The closer the instrumentalness value is
to 1.0, the greater likelihood the track contains no vocal content.
Values above 0.5 are intended to represent instrumental tracks, but
confidence is higher as the value approaches 1.0.`;

const Instrumentalness = (props) => {
  return (
    <InputWrapper
      {...props}
      title="Instrumentalness"
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

export default Instrumentalness;
