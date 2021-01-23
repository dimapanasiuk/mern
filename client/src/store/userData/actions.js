export const SEND_USER_DATA = "SEND_USER_DATA";

const sendUserData = (data) => {
  return { type: SEND_USER_DATA, data };
};

export default sendUserData;
