import React from "react";
import Slider from '@material-ui/core/Slider';
import { useEffect } from "react";
import { useRef } from "react";

const TargetOrMinMaxRange = ({
  onChange,
  min = 0,
  minDefault = 25,
  max = 100,
  maxDefault = 75,
  disabled = false,
  step=0.01
}) => {

  const valueRef = useRef({min: minDefault, max: maxDefault});

  const handleChange = (event, value) => {
    const [min, max] = value;
    const _value = {min, max}
    onChange(_value);
    valueRef.current = _value;
  };

  return (
    <Slider
      min={min}
      max={max}
      step={step}
      defaultValue={[minDefault, maxDefault]}
      onChange={handleChange}
      valueLabelDisplay="auto"
      aria-labelledby="range-slider"
      disabled={disabled}
    />
  );
};

export default TargetOrMinMaxRange;
