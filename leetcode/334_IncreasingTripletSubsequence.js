const increasingTriplet = function (arr) {
  let first = Infinity;
  let second = Infinity;
  for (let curr of arr) {
    if (curr > second && curr > first) {
      return true;
    }
    if (curr > first) {
      second = curr;
    } else {
      first = curr;
    }
  }
  return false;
};
