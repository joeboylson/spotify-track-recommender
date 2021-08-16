import React, { useEffect, useMemo, useState } from "react";
import { DualRangeContainer } from "./StyledComponents";

const Range = ({
  onChange,
  min = 0,
  max = 100,
  defaultValue = 25,
  disabled = false,
  step=0.01
}) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    if (onChange) onChange(value);
  }, [value]);

  const type = useMemo(() => "range");

  const rangeParams = useMemo(
    () => ({ min, max, defaultValue, disabled, type }),
    [min, max, defaultValue, disabled, type]
  );

  return (
    <DualRangeContainer>
      <input
        {...rangeParams}
        onChange={(e) => setValue(Number(e.target.value))}
        step={step}
      />
    </DualRangeContainer>
  );
};

export default Range;
