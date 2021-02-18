// Ex4.1 - Fibonacci -
//
// Fibonacci sequence:every number after the first two is the sum of the two preceding ones.”
//
// Depending on the chosen starting point of the sequence (0 or 1) the sequence would look like
// this:
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …
// or this:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …
//
// “Write a function to return an n element in Fibonacci sequence”

function fibonacci(n) {
  if (n > 0) {
    let arr = [];
    for (let i = 0; i < n + 1; i++) {
      if (i === 0 || i === 1) {
        arr.push(i);
      } else {
        arr.push(arr[i - 2] + arr[i - 1]);
      }
    }
    return `The ${n}${numSuffix(n)} number in the Fibonacci sequence is ${
      arr[n - 1]
    } if the sequence begins with 0 or ${arr[n]} if the sequence begins with 1`;
  } else return "invald value";
}

function numSuffix(n) {
  if (n === 1) {
    return "st";
  } else if (n === 2) {
    return "nd";
  } else if (n == 3) {
    return "rd";
  } else {
    return "th";
  }
}
