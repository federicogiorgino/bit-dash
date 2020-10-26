import React from "react";
import { AppContext } from "../../context/AppProvider";
import { CoinDetails } from "../../styles/StyledComponents";
import CoinLogo from "../Mix/CoinLogo";

const CoinHighlights = () => {
  return (
    <AppContext.Consumer>
      {({ currentFavourite, coinList }) => (
        <CoinDetails>
          <h3>{coinList[currentFavourite].FullName}</h3>
          <CoinLogo coin={coinList[currentFavourite]} large />
        </CoinDetails>
      )}
    </AppContext.Consumer>
  );
};

export default CoinHighlights;
