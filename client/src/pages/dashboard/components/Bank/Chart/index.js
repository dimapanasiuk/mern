import React from "react";
import { Line } from "react-chartjs-2";
import { object, oneOfType, array } from "prop-types";
import { chartDataPreparation } from "./chartDataPreparation";

let chartData = "";

const Chart = ({ data }) => {
  console.log("data", data);
  if (data.rates) {
    chartData = chartDataPreparation(data.rates);
  }

  return (
    <>
      {(() => {
        if (chartData) {
          return <Line data={chartData} height={80} />;
        } else {
          return <h2>Please setting currency widget </h2>;
        }
      })()}
    </>
  );
};

Chart.propTypes = {
  data: oneOfType([array, object]),
};

export default Chart;
