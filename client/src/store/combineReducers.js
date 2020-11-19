import { combineReducers } from "redux";
import choseTeamsReducer from "./choseTeams/reducer";
import choseTeamIdReducer from "./choseTeamId/reducer";
import currenciesDataReducer from "./currenciesData/reducer";
import getPlaceDataReducer from "./getPlaceData/reducer";

export default combineReducers({
  choseTeamsReducer,
  choseTeamIdReducer,
  currenciesDataReducer,
  getPlaceDataReducer,
});
