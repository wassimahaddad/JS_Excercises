// Ex6.4 - isogram
//
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement
// a function that determines whether a string that contains only letters is an isogram. Assume the
// empty string is an isogram. Ignore letter case.
//
// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case

function isIsogram(str) {
  let arr = str.split("");
  let arr2 = [];
  arr.sort().forEach((letter) => {
    letter = letter.toLowerCase();
    if (!arr2.includes(letter)) {
      arr2.push(letter);
    }
  });
  if (arr.length === arr2.length) {
    return "true";
  } else {
    return "false";
  }
}
