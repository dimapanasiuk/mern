export const GETPLACEID = "GETPLACEID";

function getPlaceId(id) {
  return { type: GETPLACEID, data: id };
}

export default getPlaceId;
