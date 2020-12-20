export const GET_USER_DATA = "GET_USER_DATA";

const getUserData = (data) => {
  return { type: GET_USER_DATA, user: data };
}

export default getUserData;
