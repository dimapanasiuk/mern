export const SEND_MAP_FEEDBACK = "SEND_MAP_FEEDBACK";

function sendMapFeedback(data) {
  return { type: SEND_MAP_FEEDBACK, data };
}

export default sendMapFeedback;
