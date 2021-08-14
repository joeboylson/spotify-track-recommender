import React, { useEffect, useState } from "react";
import TargetOrMinMaxRange from "../../../molecules/TargetOrMinMaxRange";
import { InputContainer } from "../StyledComponents";

const Tempo = ({ onChange, defaultActive }) => {
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
        <h1>Tempo</h1>
        <p>
          The overall estimated tempo of a track in beats per minute (BPM). In
          musical terminology, tempo is the speed or pace of a given piece and
          derives directly from the average beat duration.
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

export default Tempo;
