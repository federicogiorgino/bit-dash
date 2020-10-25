import React from "react";
import Page from "../components/Mix/Page";
import Welcome from "../components/Mix/Welcome";
import CoinList from "../components/Settings/CoinList";
import ConfirmButton from "../components/Settings/ConfirmButton";
import Search from "../components/Settings/Search";

const Settings = () => {
  return (
    <Page name='settings'>
      <Welcome />
      <CoinList topSection   />
      <ConfirmButton />
      <Search/>
      <CoinList />
    </Page>
  );
};

export default Settings;
