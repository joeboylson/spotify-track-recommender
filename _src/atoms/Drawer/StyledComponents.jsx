import styled from 'styled-components';
import { TransitionLong } from '../Styles';

export const DrawerContent = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 400px !important;
  min-height: 100vh;
  transform: translateX(100%);
  
  ${TransitionLong}
  
  ${({ open }) => open && `
    background-color: blue;
    transform: translateX(0);
  `}
`;

export const DrawerContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent;

  pointer-events: none;
  
  ${TransitionLong}

  ${({ open }) => open && `
    background-color: rgba(0, 0, 0, 0.5);
    pointer-events: all;
`}
`;