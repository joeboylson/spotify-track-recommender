import React, { useEffect, useMemo, useState } from "react";
import { DualRangeContainer } from "./StyledComponents";

const Range = ({
  onChange,
  min = 0,
  max = 100,
  defaultValue = 25,
  disabled = false,
}) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    console.log('Range: useEffect')
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
        step={0.01}
      />
    </DualRangeContainer>
  );
};

export default Range;
