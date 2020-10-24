import React from "react";
import { AppContext } from "../../context/AppProvider";

const Welcome = () => {
    return (
      <AppContext.Consumer>
        {({ firstVisit }) =>
          firstVisit ? <div>Welcome to Bit.Dash. Select your favourite coins.</div> : null
        }
      </AppContext.Consumer>
    );
};

export default Welcome;
