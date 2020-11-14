import { CURRENCIES } from "./actions";

const initialState = {
  currenciesData: [],
};

function currenciesDataReducer(state = initialState, action) {
  switch (action.type) {
    case CURRENCIES:
      return {
        currenciesData: action.data,
      };
    default:
      return state;
  }
}
export default currenciesDataReducer;
