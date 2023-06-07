const x = 2;
const y = 5;
const n = 4;

//경우의 수는 n더하기, 2곱하기, 3곱하기
//DynamicProgramming 이용할 것

//요약하면 dp[i]는 i라는 숫자가 되기 위해 x로부터 연산해야 하는 횟수이다. 기본적으로 -1을 저장해두고 dp[i]
function solution(x, y, n) {
  const dp = new Array(y + 1).fill(Infinity);
  dp[x] = 0;

  for (let i = x; i <= y; i++) {
    dp[i + n] = Math.min(dp[i + n], dp[i] + 1);
    dp[i * 2] = Math.min(dp[i * 2], dp[i] + 1);
    dp[i * 3] = Math.min(dp[i * 3], dp[i] + 1);
  }
  console.log(dp.length);
  return dp[y] === Infinity ? -1 : dp[y];
}

console.log(solution(x, y, n));
