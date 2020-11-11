import { dynamicColors } from "../../../../../utils";

export const chartDataPreparation = (data) => {
  const labels = Object.keys(data);
  const datasets = [];

  const objCurrencies = data[labels[0]];
  const currencies = Object.keys(objCurrencies);

  const objData = {};

  labels.forEach((item) => {
    currencies.forEach((cur) => {
      const arr = objData[cur] ? objData[cur] : [];
      objData[cur] = [...arr, data[item][cur]];
    });
  });

  currencies.forEach((item) => {
    const color = dynamicColors();

    const obj = {
      label: item,
      lineTension: 0.1,
      backgroundColor: color,
      borderColor: color,
      data: objData[item],
    };
    datasets.push(obj);
  });

  const dataForChart = {
    labels,
    datasets,
  };

  return dataForChart;
};
