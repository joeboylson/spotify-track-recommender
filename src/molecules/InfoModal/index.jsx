import { Button, IconButton, Modal } from "@material-ui/core";
import { Info } from "@material-ui/icons";
import React, { useState } from "react";
import { ModalBody } from "./StyledComponents";

const InfoModal = ({ children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);

  const handleOpen = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(true)
  }

  const handleClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(false)
  }

  return (
    <div>
      <IconButton aria-label="open info" onClick={handleOpen}>
        <Info />
      </IconButton>
      <Modal open={open} onClose={handleOpen}>
        <ModalBody>
          {children}
          <Button
            variant="contained"
            color="primary"
            onClick={handleClose}
          >
            Close
          </Button>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default InfoModal;
