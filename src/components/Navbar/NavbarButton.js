import React from "react";
import { AppContext } from "../../context/AppProvider";
import { ControlButton } from "../../styles/StyledComponents";

const NavbarButton = ({ name }) => {
  return (
    <AppContext.Consumer>
      {({ page, setPage, firstVisit }) => (
        <ControlButton
          active={page === name}
          onClick={() => setPage(name)}
          hidden={firstVisit && name === "dashboard"}
        >
          {name}
        </ControlButton>
      )}
    </AppContext.Consumer>
  );
};

export default NavbarButton;
