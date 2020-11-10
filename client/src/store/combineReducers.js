import { combineReducers } from "redux";
import choseTeamsReducer from "./choseTeams/reducer";
import choseTeamIdReducer from "./choseTeamId/reducer";
import choseCurrenciesIdReducer from "./chooseCurrenciesId/reducer";
import enterCabinetReducer from "./login/reducer";

export default combineReducers({
  choseTeamsReducer,
  choseTeamIdReducer,
  choseCurrenciesIdReducer,
  enterCabinetReducer,
});
