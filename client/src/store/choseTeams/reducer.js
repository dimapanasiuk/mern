import { CHOOSETEAM } from "./actions";

const initialState = {
  teams: [],
};

function choseTeamsReducer(state = initialState, action) {
  switch (action.type) {
    case CHOOSETEAM:
      return {
        teams: action.data,
      };
    default:
      return state;
  }
}
export default choseTeamsReducer;
