import React from "react";
import { AppContext } from "../../context/AppProvider";
import { PricesGrid } from "../../styles/StyledComponents";
import PricePaper from "./PricePaper";

const Prices = () => {
  return (
    <AppContext.Consumer>
      {({ prices }) => (
        <PricesGrid>
          {prices.map((price, index) => (
            <PricePaper price={price} index={index} key={index} />
          ))}
        </PricesGrid>
      )}
    </AppContext.Consumer>
  );
};

export default Prices;
