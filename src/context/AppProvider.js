import React, { Component, createContext } from "react";
import _ from "lodash";
import moment from "moment";
const cc = require("cryptocompare");
cc.setApiKey("3cba1eb2b59ece8408e2bd4e67f54c5ffb85d90a5488d4fc33af046b75a11e40");

const FAV_LIMIT = 10;
const INTERVALS = 10;
export const AppContext = createContext();

export class AppProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "dashboard",
      favourites: ["BTC", "ETH"],
      timeInterval: 'months',
      ...this.savedSettings(),
      setPage: this.setPage,
      confirmFavourites: this.confirmFavourites,
      addCoin: this.addCoin,
      removeCoin: this.removeCoin,
      isFavourites: this.isFavourites,
      setFilteredCoins: this.setFilteredCoins,
      fetchPrices: this.fetchPrices,
      setCurrentFavourite: this.setCurrentFavourite,
      fetchHistoricalData: this.fetchHistoricalData,
      changeChartType: this.changeChartType
    };
  }

  componentDidMount() {
    this.fetchData();
    this.fetchPrices();
    this.fetchHistoricalData();
  }

  fetchData = async () => {
    let coinList = (await cc.coinList()).Data;

    this.setState({ coinList });
  };

  setPage = (page) => this.setState({ page: page });

  savedSettings = () => {
    let bitDashToken = JSON.parse(localStorage.getItem("bitDash"));
    if (!bitDashToken) {
      return { page: "settings", firstVisit: true };
    }
    let { favourites, currentFavourite } = bitDashToken;
    return {
      favourites,
      currentFavourite,
    };
  };

  confirmFavourites = () => {
    //when we confirm our settings the dashboard will load up with our Favourites at position 0 as current favourite
    let currentFavourite = this.state.favourites[0];
    this.setState(
      { firstVisit: false, page: "dashboard", currentFavourite: currentFavourite , prices: null , historical: null},
      () => {
        this.fetchPrices();
        this.fetchHistoricalData();
      }
    );
    localStorage.setItem(
      "bitDash",
      JSON.stringify({ favourites: this.state.favourites, currentFavourite: currentFavourite })
    );
  };

  setCurrentFavourite = (symbol) => {
    this.setState({ currentFavourite: symbol , historical: null}, this.fetchHistoricalData);
    localStorage.setItem(
      "bitDash",
      JSON.stringify({ ...JSON.parse(localStorage.getItem("bitDash")), currentFavourite: symbol })
    );
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

  setFilteredCoins = (filteredCoins) => this.setState({ filteredCoins: filteredCoins });

  prices = async () => {
    let returnData = [];

    for (let i = 0; i < this.state.favourites.length; i++) {
      try {
        let priceData = await cc.priceFull(this.state.favourites[i], "USD");
        returnData.push(priceData);
      } catch (error) {
        console.warn("Error", error);
      }
    }
    return returnData;
  };

  fetchPrices = async () => {
    if (this.state.firstVisit) return;
    let prices = await this.prices();
    prices = prices.filter((price) => Object.keys(price).length);
    this.setState({ prices: prices });
  };

  historical = () => {
    let returnData = [];
    for (let units = INTERVALS; units > 0; units--) {
      returnData.push(
        cc.priceHistorical(
          this.state.currentFavourite,
          ["USD"],
          moment().subtract({ [this.state.timeInterval]: units }).toDate()
        )
      );
    }
    return Promise.all(returnData);
  };

  fetchHistoricalData = async () => {
    if (this.state.firstVisit) return;
    let results = await this.historical();
    let historical = [
      {
        name: this.state.currentFavourite,
        data: results.map((value, index) => [
          moment()
            .subtract({ [this.state.timeInterval]: INTERVALS - index })
            .valueOf(),
          value.USD,
        ]),
      },
    ];
    this.setState({ historical: historical });
  };


  changeChartType = value => {
    this.setState({ timeInterval: value , historical: null}, this.fetchHistoricalData)
    console.log(value);
    
  }
  render() {
    return <AppContext.Provider value={this.state}>{this.props.children}</AppContext.Provider>;
  }
}
