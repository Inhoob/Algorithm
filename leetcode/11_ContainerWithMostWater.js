//내 풀이 => brute force but time limit exceeded
var maxArea = function (height) {
  let len = height.length;
  let max = 0;
  let dp = Array.from({ length: len }, () => 0).map((el) =>
    Array.from({ length: len }, () => 0)
  );

  for (let i = 0; i < dp.length; i++) {
    for (let j = 0; j < dp.length; j++) {
      let width = (j - i) * Math.min(height[j], height[i]);
      if (width > max) max = width;
      dp[i][j] = Math.abs(width);
    }
  }
  console.log(dp);
  return max;
};

var maxArea = function (H) {
  let ans = 0,
    i = 0,
    j = H.length - 1;
  while (i < j) {
    ans = Math.max(ans, Math.min(H[i], H[j]) * (j - i));
    H[i] <= H[j] ? i++ : j--;
  }
  return ans;
};
