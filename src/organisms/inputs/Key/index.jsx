import React from "react";
import InputWrapper from "../../../molecules/InputWrapper";
import Select from "../../../atoms/Select";

const description = `The key the track is in. Integers map to pitches using standard
Pitch Class notation. (e.g. C, C♯/D♭, D, etc).`;

const keyOptions = [
  { name: "C#/Db", value: 1 },
  { name: "D", value: 2 },
  { name: "D#/Eb", value: 3 },
  { name: "E", value: 4 },
  { name: "F", value: 5 },
  { name: "F#/Gb", value: 6 },
  { name: "G", value: 7 },
  { name: "G#/Ab", value: 8 },
  { name: "A", value: 9 },
  { name: "A#/Bb", value: 10 },
  { name: "B", value: 11 },
  { name: "C", value: 12 },
];

const Key = (props) => {
  return (
    <InputWrapper
      {...props}
      title="Key"
      description={description}
      render={(active, setValue) => (
        <Select
          disabled={!active}
          options={keyOptions}
          onChange={(_value) => setValue(_value)}
        />
      )}
    />
  );
};

export default Key;
