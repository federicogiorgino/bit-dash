import React, { Component, createContext } from "react";
import _ from "lodash";
const cc = require("cryptocompare");
cc.setApiKey("3cba1eb2b59ece8408e2bd4e67f54c5ffb85d90a5488d4fc33af046b75a11e40");

const FAV_LIMIT = 10;
export const AppContext = createContext();

export class AppProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "dashboard",
      favourites: ["BTC", "ETH", "XMR"],
      ...this.savedSettings(),
      setPage: this.setPage,
      confirmFavourites: this.confirmFavourites,
      addCoin: this.addCoin,
      removeCoin: this.removeCoin,
      isFavourites: this.isFavourites,
      setFilteredCoins: this.setFilteredCoins,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    let coinList = (await cc.coinList()).Data;

    this.setState({ coinList });
    console.log(coinList);
  };

  setPage = (page) => this.setState({ page: page });

  savedSettings = () => {
    let bitDashToken = JSON.parse(localStorage.getItem("bitDash"));
    if (!bitDashToken) {
      return { page: "settings", firstVisit: true };
    }
    let { favourites } = bitDashToken;
    return {
      favourites,
    };
  };

  confirmFavourites = () => {
    this.setState({ firstVisit: false, page: "dashboard" });
    localStorage.setItem("bitDash", JSON.stringify({ favourites: this.state.favourites }));
  };

  addCoin = (key) => {
    let favourites = [...this.state.favourites];
    if (favourites.length < FAV_LIMIT) {
      favourites.push(key);
      this.setState({ favourites: favourites });
    }
  };

  removeCoin = (key) => {
    let favourites = [...this.state.favourites];
    this.setState({ favourites: _.pull(favourites, key) });
  };

  isFavourites = (key) => _.includes(this.state.favourites, key);

  setFilteredCoins = (filteredCoins) => this.setState({ filteredCoins: filteredCoins  });

  render() {
    return <AppContext.Provider value={this.state}>{this.props.children}</AppContext.Provider>;
  }
}
