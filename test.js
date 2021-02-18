function tribonacci(arr, n) {
  if (n === 0) return null;
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
