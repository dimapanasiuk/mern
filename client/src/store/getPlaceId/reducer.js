import { GETPLACEID } from "./actions";

const initialState = {
  id: "",
};

function getPlaceIdReducer(state = initialState, action) {
  switch (action.type) {
    case GETPLACEID:
      return {
        id: action.data,
      };
    default:
      return state;
  }
}
export default getPlaceIdReducer;
