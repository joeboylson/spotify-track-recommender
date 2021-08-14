import React, { useState, useEffect } from "react";
import TargetOrMinMaxRange from "../../../molecules/TargetOrMinMaxRange";
import { InputContainer } from "../StyledComponents";

const Danceability = ({ onChange, defaultActive }) => {
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
        <h1>Danceability</h1>
        <p>
          Danceability describes how suitable a track is for dancing based on a
          combination of musical elements including tempo, rhythm stability,
          beat strength, and overall regularity. A value of 0.0 is least
          danceable and 1.0 is most danceable.
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

export default Danceability;
