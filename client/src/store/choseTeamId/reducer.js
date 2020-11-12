import { CHOSETEAMID } from "./actions";

const initialState = {
  teams: "",
};

function choseTeamIdReducer(state = initialState, action) {
  switch (action.type) {
    case CHOSETEAMID:
      return {
        teams: action.data,
      };
    default:
      return state;
  }
}
export default choseTeamIdReducer;
