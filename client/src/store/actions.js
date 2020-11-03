export const CHOOSETEAM = "CHOOSETEAM";

function chooseTeam(teams) {
  return { type: CHOOSETEAM, data: teams };
}

export default chooseTeam;
