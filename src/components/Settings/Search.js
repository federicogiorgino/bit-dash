import React from "react";
import _ from "lodash";
import { AppContext } from "../../context/AppProvider";
import { SearchContainer, SearchInput } from "../../styles/StyledComponents";
import fuzzy from "fuzzy";

const handleFilter = _.debounce((inputValue, coinList, setFilteredCoins) => {
  //Gets all coin symbols
  let coinSymbols = Object.keys(coinList);
  //Gets all coin Names and maps them to their respective symbol
  let coinNames = coinSymbols.map((symbol) => coinList[symbol].CoinName);
  let stringToSearch = coinSymbols.concat(coinNames);
  let fuzzyResults = fuzzy.filter(inputValue, stringToSearch, {}).map((result) => result.string);

  let filteredCoins = _.pickBy(coinList, (result, symbolKey) => {
    let coinName = result.CoinName;

    return _.includes(fuzzyResults, symbolKey) || _.includes(fuzzyResults, coinName);
  });

  setFilteredCoins(filteredCoins);
}, 500);

const filterCoins = (e, setFilteredCoins, coinList) => {
  let inputValue = e.target.value;
  if (!inputValue) {
    setFilteredCoins(null);
    return;
  }
  handleFilter(inputValue, coinList, setFilteredCoins);
};

const Search = () => {
  return (
    <AppContext.Consumer>
      {({ setFilteredCoins, coinList }) => (
        <SearchContainer>
          <i className='fas fa-search'></i>
          <SearchInput
            placeholder='Search for coins'
            onKeyUp={(e) => filterCoins(e, setFilteredCoins, coinList)}
          />
        </SearchContainer>
      )}
    </AppContext.Consumer>
  );
};

export default Search;
