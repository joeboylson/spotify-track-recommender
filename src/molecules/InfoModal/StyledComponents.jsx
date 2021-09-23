import styled from "styled-components";

export const InfoModalContainer = styled.div`
  .MuiIconButton-root {
    height: 16px;
    width: 16px;
    padding: 0 !important;

    svg {
      height: 16px;
      width: 16px;
    }
  }
`;

export const ModalBody = styled.button`
  position: absolute;
  width: 300px;
  background-color: white;
  text-align: left;
  padding: 24px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  gap: 12px;
`;
