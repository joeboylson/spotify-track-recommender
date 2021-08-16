import React, { useEffect, useMemo, useState } from "react";
import { DualRangeContainer } from "./StyledComponents";

const DualRange = ({
  onChange,
  min = 0,
  minDefault = 25,
  max = 100,
  maxDefault = 75,
  disabled = false,
  step=0.01
}) => {
  const [rangeA, setRangeA] = useState(minDefault);
  const [rangeB, setRangeB] = useState(maxDefault);

  useEffect(() => {
    if (onChange) {
      const [min, max] = [rangeA, rangeB].sort();
      onChange({ min, max });
    }
  }, [rangeA, rangeB]);

  const type = useMemo(() => "range");

  const rangeParams = useMemo(
    () => ({ min, max, disabled, type }),
    [min, max, disabled, type]
  );

  return (
    <DualRangeContainer>
      <input
        {...rangeParams}
        onChange={(e) => setRangeA(Number(e.target.value))}
        defaultValue={minDefault}
        step={step}
      />

      <input
        {...rangeParams}
        onChange={(e) => setRangeB(Number(e.target.value))}
        defaultValue={maxDefault}
        step={step}
      />
    </DualRangeContainer>
  );
};

export default DualRange;
