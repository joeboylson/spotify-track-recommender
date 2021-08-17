import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: +1;

  display: grid;
  place-items: center;
`;

export const ModalContent = styled.div`
  width: 400px;
  background-color: white;
  padding: 24px;
`;