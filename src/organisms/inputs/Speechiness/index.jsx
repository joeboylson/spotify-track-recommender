import React from "react";
import TargetOrMinMaxRange from "../../../molecules/TargetOrMinMaxRange";
import InputWrapper from "../../../molecules/InputWrapper";

const description = `Speechiness detects the presence of spoken words in a track. The more
exclusively speech-like the recording (e.g. talk show, audio book,
poetry), the closer to 1.0 the attribute value. Values above 0.66
describe tracks that are probably made entirely of spoken words.
Values between 0.33 and 0.66 describe tracks that may contain both
music and speech, either in sections or layered, including such cases
as rap music. Values below 0.33 most likely represent music and other
non-speech-like tracks.`;

const Speechiness = (props) => {
  return (
    <InputWrapper
      {...props}
      title="Speechiness"
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

export default Speechiness;
