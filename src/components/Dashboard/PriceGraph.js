import React from "react";
import { AppContext } from "../../context/AppProvider";
import config from "../../highcharts/config";
import theme from "../../highcharts/theme";
import ReactHighcharts from "react-highcharts";
import { Container, Selector } from "../../styles/StyledComponents";

ReactHighcharts.Highcharts.setOptions(theme);
ReactHighcharts.Highcharts.setOptions({
  chart: {
    style: {
      fontFamily: "Poppins",
    },
  },
});
const PriceGraph = () => {
  return (
    <AppContext.Consumer>
      {({ historical, changeChartType }) => (
        <Container>
          <Selector
            defaultValue='months'
            onChange={(e) => {
              changeChartType(e.target.value);
            }}
          >
            <option value='days'>Days</option>
            <option value='weeks'>Weeks</option>
            <option value='months'>Months</option>
          </Selector>
          {historical ? <ReactHighcharts config={config(historical)} /> : <div>Loading</div>}
        </Container>
      )}
    </AppContext.Consumer>
  );
};

export default PriceGraph;
