// Ex5.8 - shortest words version 2
//
// Given a string of words, return the longest word[s].
// String will never be empty and you do not need to account for different data types.

function shortestWord(str) {
  let arr = str.split(" ");
  let shortestWord = arr.sort(function (a, b) {
    return a.length - b.length;
  });
  return shortestWord[0];
}
