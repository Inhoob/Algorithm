let tiling = function (n) {
  // TODO: 여기에 코드를 작성합니다.
  let dp = Array.from({ length: 100 }, () => -1);
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }
  return dp[n];
};
