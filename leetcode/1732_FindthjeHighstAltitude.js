/**
 * @param {number[]} gain
 * @return {number}
 */

var largestAltitude = function (gain) {
  let top = 0;
  gain.reduce((acc, curr) => {
    acc += curr;
    if (acc > top) {
      top = acc;
    }
    return acc;
  }, 0);
  return top;
};
