var isPowerOfTwo = function (n) {
  if (n === 1) {
    return true;
  }
  if (n < 1) {
    return false;
  }

  if (n % 2 !== 0) {
    return false;
  } else {
    return isPowerOfTwo(n / 2);
  }
};
