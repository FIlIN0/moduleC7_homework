export function revertString(str) {
  let revertedStr = "";

  revertedStr = str.split("").reverse().join("");
  return revertedStr;
}
