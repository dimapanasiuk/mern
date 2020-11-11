export const ID = "_id";

export const copyPartOfStr = (str, start, end) => {
  return [...str].splice(start, end).join("");
};
