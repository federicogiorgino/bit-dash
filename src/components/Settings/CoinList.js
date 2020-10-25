import React from "react";
import { AppContext } from "../../context/AppProvider";
import { Grid, SelectablePaper } from "../../styles/StyledComponents";
import CoinPaper from "./CoinPaper";

const filteredCoinsRender = (coinList, filteredCoins) => {
  return (filteredCoins && Object.keys(filteredCoins)) || Object.keys(coinList).slice(0, 100);
};

const coinsRender = (coinList, topSection, favourites, filteredCoins) => {
  return topSection ? favourites : filteredCoinsRender(coinList, filteredCoins);
};

const CoinList = ({ topSection }) => {
  return (
    <AppContext.Consumer>
      {({ coinList, favourites, filteredCoins }) => (
        <Grid>
          {coinsRender(coinList, topSection, favourites, filteredCoins).map((coinKey) => (
            <CoinPaper topSection={topSection} coinKey={coinKey} />
          ))}
        </Grid>
      )}
    </AppContext.Consumer>
  );
};

export default CoinList;
