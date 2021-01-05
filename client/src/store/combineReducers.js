import { combineReducers } from "redux";
import choseTeamIdReducer from "./choseTeamId/reducer";
// import currenciesDataReducer from "./currenciesData/reducer";
import getPlaceDataReducer from "./getPlaceData/reducer";
import sendMapFeedbackReducer from "./sendMapFeedback/reducer";
import sendUserDataReducer from "./userData/reducer";

export default combineReducers({
  choseTeamIdReducer,
  // currenciesDataReducer,
  getPlaceDataReducer,
  sendMapFeedbackReducer,
  sendUserDataReducer
});
