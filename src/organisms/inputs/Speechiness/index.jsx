import React, { useEffect, useState } from "react";
import TargetOrMinMaxRange from "../../../molecules/TargetOrMinMaxRange";
import { InputContainer } from "../StyledComponents";

const Speechiness = ({ onChange, defaultActive }) => {
  const [active, setActive] = useState(defaultActive || false);
  const [value, setValue] = useState();

  useEffect(() => {
    if (!active) return onChange(null);
    return onChange(value);
  }, [value, active]);

  const handleActiveChange = (e) => {
    setActive(e.target.checked);
  };

  return (
    <InputContainer>
      <input
        type="checkbox"
        defaultChecked={defaultActive}
        onChange={handleActiveChange}
      />
      
      <div>
        <h1>Speechiness</h1>
        <p>
          Speechiness detects the presence of spoken words in a track. The more
          exclusively speech-like the recording (e.g. talk show, audio book,
          poetry), the closer to 1.0 the attribute value. Values above 0.66
          describe tracks that are probably made entirely of spoken words.
          Values between 0.33 and 0.66 describe tracks that may contain both
          music and speech, either in sections or layered, including such cases
          as rap music. Values below 0.33 most likely represent music and other
          non-speech-like tracks.
        </p>
      </div>

      <TargetOrMinMaxRange
        min={0}
        max={1}
        minDefault={0.25}
        maxDefault={0.75}
        onChange={(_value) => setValue(_value)}
        disabled={!active}
      />
    </InputContainer>
  );
};

export default Speechiness;
