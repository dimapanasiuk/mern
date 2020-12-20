import { GET_USER_DATA } from "./actions";

const initialState = {};

const getUserDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_DATA:
      return action.user;
    default:
      return state;
  }
}

export default getUserDataReducer;
