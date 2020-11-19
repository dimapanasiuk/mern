import { SEND_MAP_FEEDBACK } from "./actions";

const initialState = [];

function senMapFeedbackReducer(state = initialState, action) {
  switch (action.type) {
    case SEND_MAP_FEEDBACK:
      return [
        ...state,
        {
          data: action.data,
        },
      ];
    default:
      return state;
  }
}

export default senMapFeedbackReducer;
