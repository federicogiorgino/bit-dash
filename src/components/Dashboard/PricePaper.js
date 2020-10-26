import React from "react";
import { AppContext } from "../../context/AppProvider";
import {
  PriceLabel,
  PriceValue,
  PriceVariation,
  SelectablePricePaper,
} from "../../styles/StyledComponents";
import { formatPrice } from "../../utils/formatPrice";

const PricePaper = ({ price, index }) => {
  let symbol = Object.keys(price)[0];
  let data = price[symbol]["USD"];

  return (
    <AppContext.Consumer>
      {({ currentFavourite, setCurrentFavourite }) => (
        <SelectablePricePaper currentFavourite={currentFavourite === symbol} onClick={() => {setCurrentFavourite(symbol)}}> 
          <PriceLabel>
            <div>{symbol}</div>
            <PriceVariation negativeChange={data.CHANGEPCT24HOUR < 0}>
              {formatPrice(data.CHANGEPCT24HOUR)}%
            </PriceVariation>
          </PriceLabel>

          <PriceValue>{formatPrice(data.PRICE)}$</PriceValue>
        </SelectablePricePaper>
      )}
    </AppContext.Consumer>
  );
};

export default PricePaper;
