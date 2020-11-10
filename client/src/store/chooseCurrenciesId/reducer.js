import { CHOSECURRENCIES } from "./actions";

const initialState = {
  curriencies: [],
};

function choseCurrenciesIdReducer(state = initialState, action) {
  switch (action.type) {
    case CHOSECURRENCIES:
      return {
        curriencies: action.data,
      };
    default:
      return state;
  }
}
export default choseCurrenciesIdReducer;
