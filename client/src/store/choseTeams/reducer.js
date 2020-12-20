import { CHOSE_TEAMS } from "./actions";

const initialState = {
  teams: [],
};

const choseTeamsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHOSE_TEAMS:
      return {
        teams: action.data,
      };
    default:
      return state;
  }
}
export default choseTeamsReducer;
