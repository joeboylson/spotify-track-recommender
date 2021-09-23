import React from "react";
import { MenuItem, Select, Slider } from "@material-ui/core";
import InputWrapper from "../../../molecules/InputWrapper";
import { sliderConfig } from "../../../constants/slider";
import { keyOptions } from "../../../constants/key";
import { modeOptions } from "../../../constants/mode";
import moment from "moment";
import { StepWrapper } from "../StyledComponents";

const AdjustTechnicalParameters = (props) => {
  const durationValueLabelFormat = (value) => {
    const min = Math.floor((value / 1000 / 60) << 0);
    const sec = Math.floor((value / 1000) % 60);
    return `${min}:${sec}`;
  };

  return (
    <StepWrapper>
      <InputWrapper
        {...props}
        name="duration_ms"
        label="Duration"
        formatLabel={value => {
          const [minValue, maxValue] = value;
          const min = moment('2000-01-01 00:00:00').add(moment.duration(minValue)).format('mm:ss')
          const max = moment('2000-01-01 00:00:00').add(moment.duration(maxValue)).format('mm:ss')
          return [min, max]
        }}
        render={({ onChange, ...rest }) => (
          <Slider
            {...rest}
            {...sliderConfig}
            onChangeCommitted={onChange}
            min={0}
            max={600000}
            getAriaValueText={durationValueLabelFormat}
            valueLabelFormat={durationValueLabelFormat}
          />
        )}
      />

      <InputWrapper
        {...props}
        name="liveness"
        render={({ onChange, ...rest }) => (
          <Slider {...rest} {...sliderConfig} onChangeCommitted={onChange} />
        )}
      />

      <InputWrapper
        {...props}
        name="popularity"
        getDefaultValueProps={(name) =>
          props.getDefaultValueProps(name, [20, 80])
        }
        render={({ onChange, ...rest }) => (
          <Slider 
            {...rest} 
            {...sliderConfig} 
            onChangeCommitted={onChange} 
            min={0}
            max={100}
            step={1}
          />
        )}
      />

      <InputWrapper
        {...props}
        name="tempo"
        formatLabel={value => {
          const [minValue, maxValue] = value;
          const min = `${minValue} BPM`
          const max = `${maxValue} BPM`
          return [min, max]
        }}
        render={({ onChange, ...rest }) => (
          <Slider 
            {...rest} 
            {...sliderConfig} 
            onChangeCommitted={onChange}
            min={0}
            max={250}
            step={1}
          />
        )}
      />

      <InputWrapper
        {...props}
        name="time_signature"
        label="Time Signature"
        render={({ onChange, ...rest }) => (
          <Slider 
            {...rest} 
            {...sliderConfig} 
            onChangeCommitted={onChange} 
            min={2}
            max={12}
            step={1}
          />
        )}
      />

      <InputWrapper
        {...props}
        name="key"
        showValueLabel={false}
        render={({ onChange, ...rest }) => (
          <Select
            {...rest}
            onChange={(event) => onChange(null, event.target.value)}
          >
            {keyOptions.map((o) => (
              <MenuItem value={o.value}>{o.name}</MenuItem>
            ))}
          </Select>
        )}
      />

      <InputWrapper
        {...props}
        name="mode"
        showValueLabel={false}
        render={({ onChange, ...rest }) => (
          <Select
            {...rest}
            onChange={(event) => onChange(null, event.target.value)}
          >
            {modeOptions.map((o) => (
              <MenuItem value={o.value}>{o.name}</MenuItem>
            ))}
          </Select>
        )}
      />
    </StepWrapper>
  );
};

export default AdjustTechnicalParameters;
