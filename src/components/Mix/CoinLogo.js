import React from "react";
import { CoinImg } from "../../styles/StyledComponents";
const CoinLogo = ({ coin, large }) => {
  return (
    <CoinImg
      large={large}
      alt={coin.CoinSymbol}
      src={`http://cryptocompare.com/${coin.ImageUrl}`}
    />
  );
};

export default CoinLogo;
