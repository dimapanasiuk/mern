export const CHOSE_TEAMS = "CHOSE_TEAMS";

const choseTeam = (teams) => {
  return { type: CHOSE_TEAMS, data: teams };
}

export default choseTeam;
