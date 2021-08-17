import React, { useEffect, useMemo, useState } from "react";
import InfoModal from "../InfoModal";
import { InputContainer, TitleWrapper } from "./StyledComponents";

const InputWrapper = ({ title, description, render, defaultActive, onChange }) => {
  const [active, setActive] = useState(defaultActive || false);
  const [value, setValue] = useState();

  useEffect(() => {
    if (!active) return onChange(null);
    return onChange(value);
  }, [value, active]);

  const handleActiveChange = (e) => {
    setActive(e.target.checked);
  };

  const children = useMemo(() => render(active, setValue), [active, render])

  return (
    <InputContainer>

      <input
        type="checkbox"
        defaultChecked={defaultActive}
        onChange={handleActiveChange}
      />

      <TitleWrapper>
        <InfoModal>
          <p>{description}</p>
        </InfoModal>
        <h2>{title}</h2>
      </TitleWrapper>

      { children }
    </InputContainer>
  );
};

export default InputWrapper;
