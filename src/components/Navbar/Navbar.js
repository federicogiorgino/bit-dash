import React from "react";
import { Logo, NavBar } from "../../styles/StyledComponents";
import NavbarButton from "./NavbarButton";

const Navbar = () => {
  return (
    <NavBar>
      <Logo>Bit.Dash</Logo>
      <div />
      <NavbarButton name='dashboard' active />
      <NavbarButton name='settings' />
    </NavBar>
  );
};

export default Navbar;
