import { CHOSECURRENCIES } from "./actions";

const initialState = {
  currencies: [],
};

function choseCurrenciesIdReducer(state = initialState, action) {
  switch (action.type) {
    case CHOSECURRENCIES:
      return {
        currencies: action.data,
      };
    default:
      return state;
  }
}
export default choseCurrenciesIdReducer;
