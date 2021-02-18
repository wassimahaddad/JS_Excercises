function tribonacci(n) {
  if (n > 0) {
    let arr0 = [];
    let arr1 = [];
    for (let i = 0; i < n; i++) {
      if (i === 0) {
        arr0.push(0);
        arr1.push(1);
      } else if (i === 1) {
        arr0.push(0);
        arr1.push(1);
      } else if (i === 2) {
        arr0.push(1);
        arr1.push(1);
      } else {
        arr0.push(arr0[i - 3] + arr0[i - 2] + arr0[i - 1]);
        arr1.push(arr1[i - 3] + arr1[i - 2] + arr1[i - 1]);
      }
    }
    return `The ${n}${numSuffix(n)} number in the Tribonacci sequence is ${
      arr0[n - 1]
    } if the sequence begins with 0 or ${
      arr1[n - 1]
    } if the sequence begins with 1`;
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
