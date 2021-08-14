import React, { useEffect, useMemo, useState } from "react";
import { SelectContainer } from "./StyledComponents";

const Select = ({ onChange, disabled = false, options }) => {
  const [value, setValue] = useState();

  useEffect(() => {
    if (onChange) onChange(value === "None" ? null : value);
  }, [value]);

  return (
    <SelectContainer>
      <select onChange={(x) => setValue(x.target.value)} disabled={disabled}>
        <option>None</option>
        {options &&
          options.map((option) => {
            const { name, value } = option;
            return (
              <option value={value} key={value}>
                {name}
              </option>
            );
          })}
      </select>
    </SelectContainer>
  );
};

export default Select;
