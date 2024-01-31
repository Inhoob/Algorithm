/**
 * @param {number[]} nums
 * @return {number}
 */

let nums = [1, 7, 3, 6, 5, 6];
var pivotIndex = function (nums) {
  let sum = nums.reduce((a, b) => a + b, 0);

  let idx = -1;
  nums.reduce((acc, curr, index) => {
    let result = acc + curr;

    if (acc === (sum - curr) / 2 && idx === -1) {
      idx = index;
    }
    return result;
  }, 0);
  return idx;
};

console.log(pivotIndex(nums));
