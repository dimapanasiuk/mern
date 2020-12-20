import { CHOSE_TEAM_ID } from "./actions";

const initialState = {
  id: "",
};

function choseTeamIdReducer(state = initialState, action) {
  switch (action.type) {
    case CHOSE_TEAM_ID:
      return {
        id: action.data,
      };
    default:
      return state;
  }
}
export default choseTeamIdReducer;
