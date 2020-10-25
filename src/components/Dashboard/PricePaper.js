import React from "react";
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
    <SelectablePricePaper>
      <PriceLabel>
        <div>{symbol}</div>
        <PriceVariation negativeChange={data.CHANGEPCT24HOUR < 0}>
          {formatPrice(data.CHANGEPCT24HOUR)}%
        </PriceVariation>
      </PriceLabel>

      <PriceValue>{formatPrice(data.PRICE)}$</PriceValue>
    </SelectablePricePaper>
  );
};

export default PricePaper;
