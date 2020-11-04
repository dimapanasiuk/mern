export const CHOSETEAMS = "CHOSETEAMS";

function choseTeam(teams) {
  return { type: CHOSETEAMS, data: teams };
}

export default choseTeam;
