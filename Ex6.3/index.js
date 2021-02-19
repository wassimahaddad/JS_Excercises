// Ex6.3 - organize strings
//
// Take 2 strings s1 and s2 including only letters from a to z.
// Return a new sorted string, the longest possible, containing distinct letters, each taken only once - coming from s1 or s2.
//
// Examples:
//
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
//
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longestString(a, b) {
  let arr = a.concat(b).split("");
  let arr2 = [];
  arr
    .sort()
    .forEach((letter) => (!arr2.includes(letter) ? arr2.push(letter) : null));
  return arr2.join("");
}
