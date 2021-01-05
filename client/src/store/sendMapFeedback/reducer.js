import { SEND_MAP_FEEDBACK } from "./actions";

const initialState = {};

const sendMapFeedbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MAP_FEEDBACK:
      return action.data;
    default:
      return state;
  }
};

export default sendMapFeedbackReducer;
