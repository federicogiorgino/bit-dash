import React from "react";
import { AppContext } from "../../context/AppProvider";
import {
  SelectablePaper,
  CoinLabel,
  DeletablePaper,
  DisabledPaper,
} from "../../styles/StyledComponents";
import CoinLogo from "../Mix/CoinLogo";

const clickHandler = (topSection, coinKey, addCoin, removeCoin) => {
  return topSection
    ? () => {
        removeCoin(coinKey);
      }
    : () => {
        addCoin(coinKey);
      };
};

const CoinPaper = ({ coinKey, topSection }) => {
  return (
    <AppContext.Consumer>
      {({ coinList, addCoin, removeCoin, isFavourites }) => {
        let coin = coinList[coinKey];
        let PaperType = SelectablePaper;
        if (topSection) {
          PaperType = DeletablePaper;
        } else if (isFavourites(coinKey)) {
          PaperType = DisabledPaper;
        }

        return (
          <PaperType onClick={clickHandler(topSection, coinKey, addCoin, removeCoin)}>
            <CoinLogo coin={coin} />
            <CoinLabel>
              <div>{coin.Symbol}</div>
              <div>{coin.CoinName}</div>
            </CoinLabel>
          </PaperType>
        );
      }}
    </AppContext.Consumer>
  );
};

export default CoinPaper;
