import React from "react";
import TargetOrMinMaxRange from "../../../molecules/TargetOrMinMaxRange";
import InputWrapper from "../../../molecules/InputWrapper";

const description = `A measure from 0.0 to 1.0 describing the musical positiveness conveyed
by a track. Tracks with high valence sound more positive (e.g. happy,
cheerful, euphoric), while tracks with low valence sound more negative
(e.g. sad, depressed, angry).`;

const Valence = (props) => {
  return (
    <InputWrapper
      {...props}
      title="Valence"
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

export default Valence;
