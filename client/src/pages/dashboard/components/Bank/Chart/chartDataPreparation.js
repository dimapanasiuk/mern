// const a = {
//   labels: ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"],
//   datasets: [
//     {
//       label: "My First dataset",
//       fill: false,
//       lineTension: 0.1,
//       borderColor: "rgba(75,192,192,1)",
//       data: [65, 59, 80, 81, 56, 55, 40],
//     },
//     {
//       label: "National Average",
//       fill: false,
//       lineTension: 0.1,
//       borderColor: "red",
//       data: [65, 20, 30, 10, 56, 56, 46],
//     },
//   ],
// };

export const chartDataPreparation = (data) => {
  const labels = Object.keys(data);
  const objCurrencies = data[labels[0]];
  const currencies = Object.keys(objCurrencies);

  const objData = {};

  labels.forEach((item) => {
    currencies.forEach((cur) => {
      const arr = objData[cur] ? objData[cur] : [];
      objData[cur] = [...arr, data[item][cur]];
    });
  });
};
