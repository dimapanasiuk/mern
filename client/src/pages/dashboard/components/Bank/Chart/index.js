import React from "react";
import { Alert } from "reactstrap";
import { Line } from "react-chartjs-2";
import { object, oneOfType, array } from "prop-types";

import { chartDataPreparation } from "./chartDataPreparation";

let chartData = "";

const Chart = ({ data }) => {
  if (data.rates) {
    chartData = chartDataPreparation(data.rates);
  }

  return (
    <>
      {chartData ? (
        <Line data={chartData} height={90} />
      ) : (
        <Alert color="warning">Please setting currency widget</Alert>
      )}
    </>
  );
};

Chart.propTypes = {
  data: oneOfType([array, object]),
};

export default Chart;
