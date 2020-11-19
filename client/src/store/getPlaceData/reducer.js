import { GET_PLACE_DATA } from "./actions";

const initialState = [];

function getPlaceDataReducer(state = initialState, action) {
  console.log("state", state);
  switch (action.type) {
    case GET_PLACE_DATA:
      return [
        ...state,
        {
          id: action.placeId,
          label: action.label,
        },
      ];
    default:
      return state;
  }
}

export default getPlaceDataReducer;
