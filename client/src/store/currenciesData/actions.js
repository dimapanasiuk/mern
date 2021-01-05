export const CURRENCIES = "CURRENCIES";

const getCurrenciesData = (info) => {
  return { type: CURRENCIES, data: info };
};

export default getCurrenciesData;
