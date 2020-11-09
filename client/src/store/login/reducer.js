import { LOGIN } from "./action";

const initialState = {
  userId: "",
};

function enterCabinetReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        userId: action.data,
      };
    default:
      return state;
  }
}
export default enterCabinetReducer;
