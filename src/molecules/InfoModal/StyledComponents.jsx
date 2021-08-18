import styled from "styled-components";

export const ModalBody = styled.button`
  position: absolute;
  width: 400px;
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
