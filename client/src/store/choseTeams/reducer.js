import { CHOSETEAMS } from "./actions";

const initialState = {
  teams: [],
};

function choseTeamsReducer(state = initialState, action) {
  switch (action.type) {
    case CHOSETEAMS:
      return {
        teams: action.data,
      };
    default:
      return state;
  }
}
export default choseTeamsReducer;
