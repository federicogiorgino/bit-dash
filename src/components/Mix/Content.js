import React from "react";
import { AppContext } from "../../context/AppProvider";

const Content = ({ children }) => {
  return (
    <AppContext.Consumer>
      {({ coinList, prices, firstVisit }) => {
        if (!coinList) {
          return <div>Getting all the Bits</div>;
        }

        if (!firstVisit && !prices) {
          return <div>Loading prices</div>;
        }
        return <div>{children}</div>;
      }}
    </AppContext.Consumer>
  );
};

export default Content;
