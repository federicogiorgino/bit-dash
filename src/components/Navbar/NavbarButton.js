import React from "react";
import { AppContext } from "../../context/AppProvider";
import { ControlButton } from "../../styles/StyledComponents";

const NavbarButton = ({ name, active }) => {
  return (
    <AppContext.Consumer>
      {({ page, setPage }) => (
        <ControlButton active={page === name} onClick={() => setPage(name)}>
          {name}
        </ControlButton>
      )}
    </AppContext.Consumer>
  );
};

export default NavbarButton;
