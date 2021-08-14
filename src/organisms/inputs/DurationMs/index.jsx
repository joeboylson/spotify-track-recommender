import React from "react";
import TargetOrMinMaxRange from "../../../molecules/TargetOrMinMaxRange";
import InputWrapper from "../../../molecules/InputWrapper";

const description = `The duration of the track in milliseconds.`;

const DurationMs = (props) => {
  return (
    <InputWrapper
      {...props}
      title="DurationMs"
      description={description}
      render={(active, setValue) => (
        <TargetOrMinMaxRange
          min={0}
          max={600000}
          minDefault={180000}
          maxDefault={300000}
          onChange={(_value) => setValue(_value)}
          disabled={!active}
        />
      )}
    />
  );
};

export default DurationMs;
