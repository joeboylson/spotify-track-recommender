import React from "react";
import { BottomNavigationAction } from "@material-ui/core";
import { Audiotrack, Code, Tune } from "@material-ui/icons";
import { FooterBottomNavigation } from "./StyledComponents";
import { useHistory } from "react-router-dom";

const Footer = () => {

    const { push } = useHistory();

    const handleChangeRoute = (e, value) => {
        push(value)
    }
    
    return (
  <FooterBottomNavigation
    value={"recents"}
    onChange={handleChangeRoute}
  >
    <BottomNavigationAction
      label="Recents"
      value="/"
      icon={<Tune />}
      />
    <BottomNavigationAction
      label="Recents"
      value="/tracks"
      icon={<Audiotrack />}
    />

    <BottomNavigationAction
      label="Recents"
      value="/about"
      icon={<Code />}
    />
  </FooterBottomNavigation>
)};

export default Footer;
