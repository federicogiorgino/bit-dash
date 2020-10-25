import React from "react";
import { AppContext } from "../../context/AppProvider";

const Content = ({ children }) => {
  return (
    <AppContext.Consumer>
      {({ coinList }) => {
        if (!coinList) {
          return <div>Getting all the Bits</div>;
        }
        return <div>{children}</div>;
      }}
    </AppContext.Consumer>
  );
};

export default Content;
