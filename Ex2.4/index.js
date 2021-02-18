// Ex2.4 - Unique
//
// There is an array with some numbers.
// All numbers are equal except for one. Try to find it!
//
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
//
// It’s guaranteed that array contains at least 3 numbers.

function findUniqeNumber(arr) {
  arr = arr.sort();
  if (arr[0] - arr[1] === 0) {
    return arr[arr.length - 1];
  } else {
    return arr[0];
  }
}
