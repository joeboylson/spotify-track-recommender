import React from "react";
import TargetOrMinMaxRange from "../../../molecules/TargetOrMinMaxRange";
import InputWrapper from "../../../molecules/InputWrapper";

const description = `An estimated overall time signature of a track. The time signature
(meter) is a notational convention to specify how many beats are in
each bar (or measure).`;

const TimeSignature = (props) => {
  return (
    <InputWrapper
      {...props}
      title="TimeSignature"
      description={description}
      render={(active, setValue) => (
        <TargetOrMinMaxRange
          min={2}
          max={12}
          minDefault={2}
          maxDefault={4}
          onChange={(_value) => setValue(_value)}
          disabled={!active}
        />
      )}
    />
  );
};

export default TimeSignature;
