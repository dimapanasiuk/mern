import { SEND_MAP_FEEDBACK } from "./actions";

const initialState = [];

function sendMapFeedbackReducer(state = initialState, action) {
  switch (action.type) {
    case SEND_MAP_FEEDBACK:
      return [...state, action.data];
    default:
      return state;
  }
}

export default sendMapFeedbackReducer;
