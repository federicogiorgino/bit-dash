import React from "react";
import { AppContext } from "../../context/AppProvider";
import { Button, Centered } from "../../styles/StyledComponents";

const ConfirmButton = () => {
  return (
    <AppContext.Consumer>
      {({ confirmFavourites }) => (
        <Centered>
          <Button onClick={confirmFavourites}>Confirm</Button>
        </Centered>
      )}
    </AppContext.Consumer>
  );
};

export default ConfirmButton;
