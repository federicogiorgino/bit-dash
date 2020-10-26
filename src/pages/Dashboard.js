import React from "react";
import CoinHighlights from "../components/Dashboard/CoinHighlights";
import PriceGraph from "../components/Dashboard/PriceGraph";
import Prices from "../components/Dashboard/Prices";
import Page from "../components/Mix/Page";
import { ChartLayout } from "../styles/StyledComponents";

const Dashboard = () => {
  return (
    <Page name='dashboard'>
      <Prices />
      <ChartLayout>
        <CoinHighlights />
        <PriceGraph />
      </ChartLayout>
    </Page>
  );
};

export default Dashboard;
