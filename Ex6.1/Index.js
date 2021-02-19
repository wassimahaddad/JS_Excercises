// Ex6.1 - Mumbling
//
// This time no story, no theory. The examples below show you how to write function accum​:
//
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeeezzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from ​a..z​ and ​A..Z​.

function accum(str) {
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].repeat(i + 1, arr[i]);
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr.join("-");
}
