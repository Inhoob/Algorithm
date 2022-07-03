function power(base, exponent) {
  // todo: 여기에 코드를 작성합니다.
  let dp = Array.from({ length: exponent }, () => 0);
  dp[0] = 1;
  for (let i = 1; i <= exponent; i++) {
    dp[i] = (dp[i - 1] * base) % 94906249;
  }

  // return dp[exponent]
  return dp[exponent];
}
let output = power(3, 40);
console.log(output); // --> 19334827
