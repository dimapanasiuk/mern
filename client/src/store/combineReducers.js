import { combineReducers } from "redux";
import choseTeamsReducer from "./choseTeams/reducer";
import choseTeamIdReducer from "./choseTeamId/reducer";
import currenciesDataReducer from "./currenciesData/reducer";
import getPlaceDataReducer from "./getPlaceData/reducer";
import senMapFeedbackReducer from "./sendMapFeedback/reducer";

export default combineReducers({
  choseTeamsReducer,
  choseTeamIdReducer,
  currenciesDataReducer,
  getPlaceDataReducer,
  senMapFeedbackReducer,
});
