import { CHOSETEAMID } from "./actions";

const initialState = {
  id: "",
};

function choseTeamIdReducer(state = initialState, action) {
  switch (action.type) {
    case CHOSETEAMID:
      return {
        id: action.data,
      };
    default:
      return state;
  }
}
export default choseTeamIdReducer;
