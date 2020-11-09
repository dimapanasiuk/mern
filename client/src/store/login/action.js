export const LOGIN = "LOGIN";

function enterCabinet(id) {
  return { type: LOGIN, data: id };
}

export default enterCabinet;
