// Ex5.3 - To Camel Case
//
// Complete the method/function so that it converts dash/underscore delimited words into camel
// casing. The first word within the output should be capitalized only if the original word was
// capitalized (known as Upper Camel Case, also often referred to as Pascal case).
// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

function toCamelCase(str) {
  let arr = str.split("");
  if (arr.includes("_")) {
    arr = str.split("_");
  } else if (arr.includes("-")) {
    arr = str.split("-");
  } else {
    return "This is not a dash/underscore delimited string";
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr.join("");
}
