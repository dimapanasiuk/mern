import { CHOOSETEAM } from "./actions";

const initialState = {
  teams: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case CHOOSETEAM:
      return {
        count: action.data,
      };
    default:
      return state;
  }
}
export default reducer;
