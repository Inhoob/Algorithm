function solution(triangle) {
  const dp = [...triangle];
  for (let i = 1; i < dp.length; i++) {
    for (let j = 0; j < dp[i].length; j++) {
      dp[i][j] += larger(dp[i - 1][j - 1], dp[i - 1][j]);
    }
  }
  return dp[triangle.length - 1].reduce((max, val) => (max > val ? max : val));
}

function larger(a, b) {
  if (a === undefined) return b;
  if (b === undefined) return a;
  return Math.max(a, b);
}
