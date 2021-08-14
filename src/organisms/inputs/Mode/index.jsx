import React from "react";
import InputWrapper from "../../../molecules/InputWrapper";
import Select from "../../../atoms/Select";

const description = `Mode indicates the modality (major or minor) of a track, the type of
scale from which its melodic content is derived. Major is
represented by 1 and minor is 0.`;

const modeOptions = [
  { name: "Major", value: 1 },
  { name: "Minor", value: 0 },
];

const Mode = (props) => {
  return (
    <InputWrapper
      {...props}
      title="Mode"
      description={description}
      render={(active, setValue) => (
        <Select
          disabled={!active}
          options={modeOptions}
          onChange={(_value) => setValue(_value)}
        />
      )}
    />
  );
};

export default Mode;
