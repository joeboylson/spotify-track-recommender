import React, { useCallback, useEffect, useState } from "react";
import DualRange from "../../atoms/DualRange";
import Range from "../../atoms/Range";

const rangeTypes = {
  target: "TARGET",
  minMax: "MIN_MAX",
};

const TargetOrMinMaxRange = ({
  onChange,
  min = 0,
  minDefault = 25,
  max = 100,
  maxDefault = 75,
  disabled = false,
}) => {
  const [minMax, setMinMax] = useState({ min: minDefault, max: minDefault });
  const [rangeType, setRangeType] = useState(rangeTypes.target);

  useEffect(() => {
    if (onChange) return onChange(minMax);
  }, [minMax, onChange]);

  return (
    <div>
      <button
        onClick={() => setRangeType(rangeTypes.target)}
        disabled={disabled}
      >
        TARGET
      </button>
      <button
        onClick={() => setRangeType(rangeTypes.minMax)}
        disabled={disabled}
      >
        MIN MAX
      </button>

      {rangeType === rangeTypes.target && (
        <Range
          onChange={_value => setMinMax({ min: _value, max: _value })}
          min={min}
          max={max}
          type="range"
          defaultValue={minDefault}
          step={0.01}
          disabled={disabled}
        />
      )}

      {rangeType === rangeTypes.minMax && (
        <DualRange
          onChange={setMinMax}
          min={min}
          minDefault={minDefault}
          max={max}
          maxDefault={maxDefault}
          disabled={disabled}
        />
      )}
    </div>
  );
};

export default TargetOrMinMaxRange;
