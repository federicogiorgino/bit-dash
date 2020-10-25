import React from "react";

const CoinLogo = ({ coin, style }) => {
  return (
    <img
      alt={coin.CoinSymbol}
      style={style || { height: "40px", borderRadius: "50px" }}
      src={`http://cryptocompare.com/${coin.ImageUrl}`}
    />
  );
};

export default CoinLogo;
