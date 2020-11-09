import { combineReducers } from "redux";
import choseTeamsReducer from "./choseTeams/reducer";
import choseTeamIdReducer from "./choseTeamId/reducer";
import enterCabinetReducer from "./login/reducer";

export default combineReducers({
  choseTeamsReducer,
  choseTeamIdReducer,
  enterCabinetReducer,
});
