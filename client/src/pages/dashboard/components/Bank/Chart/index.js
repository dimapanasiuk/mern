import React from "react";
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
        <h2>Please setting currency widget </h2>
      )}
    </>
  );
};

Chart.propTypes = {
  data: oneOfType([array, object]),
};

export default Chart;
