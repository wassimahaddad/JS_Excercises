// Ex5.8 - shortest words version 2
//
// Given a string of words, return the longest word[s].
// String will never be empty and you do not need to account for different data types.

function longestWords(str) {
  let arr = str.split(" ");
  let arrByLength = arr.sort(function (a, b) {
    return b.length - a.length;
  });
  let result = [];
  result.push(arrByLength[0]);
  for (let i = 1; i < arr.length; i++) {
    if (arrByLength[i].length == arrByLength[0].length) {
      result.push(arrByLength[i]);
    }
  }
  return result;
}
