import React from "react";
import { AppContext } from "../../context/AppProvider";

const Welcome = () => {
    return (
      <AppContext.Consumer>
        {({ firstVisit }) =>
          firstVisit ? (
            <div style={{ margin: "20px 0" }}>
              Welcome to Bit.Dash. Select your favourite coins.
            </div>
          ) : null
        }
      </AppContext.Consumer>
    );
};

export default Welcome;
