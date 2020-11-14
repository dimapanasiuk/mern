export const ID = "_id";

export const copyPartOfStr = (str, start, end) => {
  return [...str].splice(start, end).join("");
};
export const dynamicColors = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
};