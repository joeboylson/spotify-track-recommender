import React from "react";
import { InputvalueLabelContainer } from "./StyledComponents";

const InputValueLabel = ({value}) => (
  <InputvalueLabelContainer>
    <span>{value[0]}</span>
    <span>{value[1]}</span>
  </InputvalueLabelContainer>
);

export default InputValueLabel;
