import React from "react";
import TargetOrMinMaxRange from "../../../molecules/TargetOrMinMaxRange";
import InputWrapper from "../../../molecules/InputWrapper";

const description = `The overall estimated tempo of a track in beats per minute (BPM). In
musical terminology, tempo is the speed or pace of a given piece and
derives directly from the average beat duration.`;

const Tempo = (props) => {
  return (
    <InputWrapper
      {...props}
      title="Tempo (bpm)"
      description={description}
      render={(active, setValue) => (
        <TargetOrMinMaxRange
          min={0}
          max={250}
          minDefault={70}
          maxDefault={110}
          onChange={(_value) => setValue(_value)}
          disabled={!active}
        />
      )}
    />
  );
};

export default Tempo;
