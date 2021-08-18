import React, { useMemo, useState } from "react";
import InfoModal from "../InfoModal";
import { InputAccordion, TitleWrapper } from "./StyledComponents";

import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const InputWrapper = ({
  title,
  description,
  render,
  defaultActive,
  onChange,
}) => {
  const [active, setActive] = useState(defaultActive || false);

  const children = useMemo(
    () => render(active, onChange),
    [active, render, onChange]
  );

  return (
    <InputAccordion onChange={(_, expanded) => setActive(expanded)}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <TitleWrapper>
          <InfoModal>
            <p>{description}</p>
          </InfoModal>
          <p>{title}</p>
        </TitleWrapper>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </InputAccordion>
  );
};

export default InputWrapper;
