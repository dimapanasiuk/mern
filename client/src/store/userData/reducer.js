import { SEND_USER_DATA } from "./actions";

const initialState = {};

const sendUserDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_USER_DATA:
      return action.data;
    default:
      return state;
  }
};

export default sendUserDataReducer;
