import React from "react";
import Slider from '@material-ui/core/Slider';

const TargetOrMinMaxRange = ({
  onChange,
  min = 0,
  minDefault = 25,
  max = 100,
  maxDefault = 75,
  disabled = false,
  step=0.01
}) => {

  const handleChange = (event, value) => {
    const [min, max] = value;
    onChange({min, max})
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
