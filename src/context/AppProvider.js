import React, { Component, createContext } from "react";
const cc = require("cryptocompare");
cc.setApiKey("3cba1eb2b59ece8408e2bd4e67f54c5ffb85d90a5488d4fc33af046b75a11e40");

export const AppContext = createContext();

export class AppProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "dashboard",
      ...this.savedSettings(),
      setPage: this.setPage,
      confirmFavourites: this.confirmFavourites,
    };
  }

  componentDidMount() {
    this.fetchData();
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
    return {};
  };

  confirmFavourites = () => {
    this.setState({ firstVisit: false, page: "dashboard" });
    localStorage.setItem("bitDash", JSON.stringify({ test: "hello" }));
  };

  render() {
    return <AppContext.Provider value={this.state}>{this.props.children}</AppContext.Provider>;
  }
}
