export const GET_PLACE_DATA = "GET_PLACE_DATA";

function getPlaceId(id, city) {
  return { type: GET_PLACE_DATA, placeId: id, label: city };
}

export default getPlaceId;
