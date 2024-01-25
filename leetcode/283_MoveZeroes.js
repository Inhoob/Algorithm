/**
 *
 * TwoPointer Algorithm
 * 2개의 포인터가 low, high에 각각 있다.
 * low가 0이아니면 low,high 전부 더하고 만약 low가 0인데 high가 0이아닌경우 바꿔줌.
 * low가 0이고 high도 0이면 그냥 high만 더해준다.
 */
let moveZeroes = function (nums) {
  let low = 0;
  let high = low + 1;

  while (high <= nums.length - 1) {
    if (nums[low] !== 0) {
      low++;
      high++;
    } else {
      if (nums[high] !== 0) {
        [nums[low], nums[high]] = [nums[high], nums[low]];
        low++;
      }
      high++;
    }
  }
};
