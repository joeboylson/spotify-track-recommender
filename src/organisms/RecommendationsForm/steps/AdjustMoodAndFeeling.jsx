import React from "react";
import { Slider } from "@material-ui/core";
import InputWrapper from "../../../molecules/InputWrapper";
import { sliderConfig } from "../../../constants/slider";
import { StepWrapper } from "../StyledComponents";

const AdjustMoodAndFeeling = (props) => {
  return (
    <StepWrapper>
      <InputWrapper
        {...props}
        name="acousticness"
        render={({ onChange, ...rest }) => (
          <Slider {...rest} {...sliderConfig} onChangeCommitted={onChange} />
        )}
      />

      <InputWrapper
        {...props}
        name="danceability"
        render={({ onChange, ...rest }) => (
          <Slider {...rest} {...sliderConfig} onChangeCommitted={onChange} />
        )}
      />

      <InputWrapper
        {...props}
        name="energy"
        render={({ onChange, ...rest }) => (
          <Slider {...rest} {...sliderConfig} onChangeCommitted={onChange} />
        )}
      />

      <InputWrapper
        {...props}
        name="instrumentalness"
        render={({ onChange, ...rest }) => (
          <Slider {...rest} {...sliderConfig} onChangeCommitted={onChange} />
        )}
      />

      <InputWrapper
        {...props}
        name="loudness"
        formatLabel={value => {
          const [minValue, maxValue] = value;
          const min = `${minValue} dB`
          const max = `${maxValue} dB`
          return [min, max]
        }}
        render={({ onChange, ...rest }) => (
          <Slider
            {...rest}
            {...sliderConfig}
            onChangeCommitted={onChange}
            min={-200}
            max={0}
            step={1}
          />
        )}
      />

      <InputWrapper
        {...props}
        name="speechiness"
        render={({ onChange, ...rest }) => (
          <Slider {...rest} {...sliderConfig} onChangeCommitted={onChange} />
        )}
      />

      <InputWrapper
        {...props}
        name="valence"
        render={({ onChange, ...rest }) => (
          <Slider {...rest} {...sliderConfig} onChangeCommitted={onChange} />
        )}
      />
    </StepWrapper>
  );
};

export default AdjustMoodAndFeeling;
