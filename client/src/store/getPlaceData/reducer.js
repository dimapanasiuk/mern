import { GET_PLACE_DATA } from "./actions";

const initialState = {
  id: "",
  label: "",
};

function getPlaceDataReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PLACE_DATA:
      return {
        id: action.placeId,
        label: action.label,
      };
    default:
      return state;
  }
}

export default getPlaceDataReducer;
