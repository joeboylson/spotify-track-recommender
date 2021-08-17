import React from "react";
import { ModalContainer, ModalContent } from "./StyledComponents";

const Modal = ({children, open}) => {

  if (!open) return null;

  return (
    <ModalContainer>
      <ModalContent>
        { children }
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
