import React from "react";
import TargetOrMinMaxRange from "../../../molecules/TargetOrMinMaxRange";
import InputWrapper from "../../../molecules/InputWrapper";

const description = `A measure from 0 to 100 of the track's popularity. 100 represents high popularity.`;

const Popularity = (props) => {
  return (
    <InputWrapper
      {...props}
      title="Popularity"
      description={description}
      render={(active, setValue) => (
        <TargetOrMinMaxRange
          min={0}
          max={100}
          minDefault={25}
          maxDefault={50}
          onChange={(_value) => setValue(_value)}
          disabled={!active}
          step={1}
        />
      )}
    />
  );
};

export default Popularity;
