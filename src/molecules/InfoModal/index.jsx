import React, { useState } from "react";
import Modal from '../../atoms/Modal';
import { HelpOutlined } from "../../atoms/SVG";
import { InfoModalButton } from "./StyledComponents";

const InfoModal = ({children, defaultOpen = false}) => {

  const [open, setOpen] = useState(defaultOpen);

  return (
    <div>

      <InfoModalButton onClick={() => setOpen(true)}>
        <HelpOutlined/>
      </InfoModalButton>

      <Modal open={open}>
        <div>
          {children}
        </div>
        <button onClick={() => setOpen(false)}>close info modal</button>
      </Modal>

    </div>
  );
};

export default InfoModal;
