export const CURRENCIES = "CURRENCIES";

function getCurrenciesData(info) {
  return { type: CURRENCIES, data: info };
}

export default getCurrenciesData;
