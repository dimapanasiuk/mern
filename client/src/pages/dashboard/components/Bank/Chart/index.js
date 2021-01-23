import React from "react";
import { Alert } from "reactstrap";
import { Line } from "react-chartjs-2";
import { object, oneOfType, array } from "prop-types";
import { useTranslation } from "react-i18next";
import theme from "style/theme";
import { chartDataPreparation } from "./chartDataPreparation";

let chartData = "";

const Chart = ({ data }) => {
  const { t } = useTranslation();

  if (data.rates) {
    chartData = chartDataPreparation(data.rates);
  }

  return (
    <>
      {chartData ? (
        <Line data={chartData} height={90} />
      ) : (
        <Alert color={theme.warning}>
          {t("Please setting currency widget")}
          &nbsp;
          {t("Widget")}
        </Alert>
      )}
    </>
  );
};

Chart.propTypes = {
  data: oneOfType([array, object]),
};

export default Chart;
