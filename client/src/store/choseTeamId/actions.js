export const CHOSETEAMID = "CHOSETEAMID";

function choseTeamId(id) {
  return { type: CHOSETEAMID, data: id };
}

export default choseTeamId;
