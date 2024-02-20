/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

//O(NlogN) solution
var maxOperations = function (nums, k) {
  let sorted = nums.sort((a, b) => a - b);
  let result = 0;
  let start = 0;
  let end = sorted.length - 1;
  while (start < end) {
    let sum = sorted[start] + sorted[end];
    if (sum === k) {
      result++;
      start++;
      end--;
    } else if (sum > k) {
      end--;
    } else {
      start++;
    }
  }
  return result;
};

//O(N) solution
var maxOperations = function (nums, k) {
  let m = new Map(),
    ans = 0;
  for (let n of nums)
    if (n < k)
      if (m.get(k - n)) m.set(k - n, m.get(k - n) - 1), ans++;
      else m.set(n, (m.get(n) || 0) + 1);
  return ans;
};
