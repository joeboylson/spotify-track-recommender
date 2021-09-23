import React, { useCallback, useMemo } from "react";
import InputValueLabel from "./InputLabelValue";
import InfoModal from "../InfoModal";
import inputDescriptions from "../../data/inputDescriptions.json"
import { Chip } from "@material-ui/core";
import { capitalize } from "lodash";
import { InputWrapperLabel } from "./StyledComponents";

const InputWrapper = ({
  label,
  name,
  showValueLabel = true,
  formatLabel,
  render,
  setValue,
  getDefaultValueProps,
  watch
}) => {
  const { isDirty, defaultValue } = getDefaultValueProps(name);

  const currentValue = watch(name)

  const onChange = useCallback(
    (_, value) => setValue(name, value),
    [name, setValue]
  );

  const content = useMemo(
    () => render({ name, id: name, defaultValue, onChange }),
    [defaultValue, name, onChange, render]
  );

  const inputValueLabel = useMemo(() => {
    if (formatLabel) {
      const valueLabel = formatLabel(currentValue || defaultValue);
      return valueLabel
    } else {
      return currentValue || defaultValue
    }

  }, [currentValue, defaultValue, formatLabel]) 

  return (
    <div>
      <InputWrapperLabel className="small">

        <InfoModal>
          { inputDescriptions[name] }
        </InfoModal>

        {label || capitalize(name)}
        {isDirty && (
          <Chip
            variant="outlined"
            size="small"
            label="Reset"
            onClick={() => setValue(name, null)}
          />
        )}

        {isDirty && showValueLabel && (
          <InputValueLabel value={inputValueLabel}/>
        )}
      </InputWrapperLabel>
      <div>{content}</div>
    </div>
  );
};

export default InputWrapper;
