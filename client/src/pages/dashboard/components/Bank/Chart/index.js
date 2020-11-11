import React from "react";
import { Line } from "react-chartjs-2";
import { any } from "prop-types";
import { chartDataPreparation } from "./chartDataPreparation";

const chartData = {
  labels: ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"],
  datasets: [
    {
      label: "My First dataset",
      fill: false,
      lineTension: 0.1,
      borderColor: "rgba(75,192,192,1)",
      data: [65, 59, 80, 81, 56, 55, 40],
    },
    {
      label: "National Average",
      fill: false,
      lineTension: 0.1,
      borderColor: "red",
      data: [65, 20, 30, 10, 56, 56, 46],
    },
  ],
};

const Chart = ({ data }) => {
  if (data.rates) {
    console.log("data ready", data.rates);
    chartDataPreparation(data.rates);
  }

  return (
    <>
      <Line data={chartData} height={80} />
    </>
  );
};

Chart.propTypes = {
  data: any,
};

export default Chart;
