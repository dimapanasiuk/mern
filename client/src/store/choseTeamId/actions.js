export const CHOSE_TEAM_ID = "CHOSE_TEAM_ID";

const choseTeamId = (id) => {
  return { type: CHOSE_TEAM_ID, data: id };
}

export default choseTeamId;
