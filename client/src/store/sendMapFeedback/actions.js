export const SEND_MAP_FEEDBACK = "SEND_MAP_FEEDBACK";

function sendMapFeedBack(data) {
  return { type: SEND_MAP_FEEDBACK, data };
}

export default sendMapFeedBack;
