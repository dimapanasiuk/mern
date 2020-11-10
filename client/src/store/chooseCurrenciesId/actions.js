export const CHOSECURRENCIES = "CHOSECURRENCIES";

function choseCurrenciesId(id) {
  return { type: CHOSECURRENCIES, data: id };
}

export default choseCurrenciesId;
