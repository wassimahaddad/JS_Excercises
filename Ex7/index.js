// Ex7 - Implement The Following JS Methods -
//
// Implement the following methods -
// Using only for(), array and objects (without other js methods)
//
// - Filter

function myFilter(array, func) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (func(array[i]) == true) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

// - ForEach

function myForEach(array, func) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr[i] = newArr.push(func(array[i]));
  }
}

// - Map

function myMap(array, func) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr[i] = newArr.push(func(array[i]));
  }
  return newArr;
}
