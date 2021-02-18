// Ex4.2 - Tribonacci
//
// you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.
// Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array

function tribonacci(arr, n) {
  if (n === 0) return [];
  else if (n == 1) {
    return arr.slice(0, 1);
  } else if (n == 2) {
    return arr.slice(0, 2);
  }
  for (let i = 3; i < n; i++) {
    arr.push(arr[i - 3] + arr[i - 2] + arr[i - 1]);
  }
  return arr;
}
