import { combineReducers } from "redux";
import choseTeamsReducer from "./choseTeams/reducer";
import choseTeamIdReducer from "./choseTeamId/reducer";

export default combineReducers({
  choseTeamsReducer,
  choseTeamIdReducer,
});
