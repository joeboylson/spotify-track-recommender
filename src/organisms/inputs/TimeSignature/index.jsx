import React, { useEffect, useState } from "react";
import TargetOrMinMaxRange from "../../../molecules/TargetOrMinMaxRange";
import { InputContainer } from "../StyledComponents";

const TimeSignature = ({ onChange, defaultActive }) => {
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
        <h1>TimeSignature</h1>
        <p>
          An estimated overall time signature of a track. The time signature
          (meter) is a notational convention to specify how many beats are in
          each bar (or measure).
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

export default TimeSignature;
