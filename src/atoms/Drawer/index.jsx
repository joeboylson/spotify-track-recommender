import React from 'react';
import { DrawerContainer, DrawerContent } from './StyledComponents';

const Drawer = ({ children, open }) => {

  return (
    <DrawerContainer open={open}>
      <DrawerContent open={open}>
        {children}
      </DrawerContent>
    </DrawerContainer>
  );

}

export default Drawer;

