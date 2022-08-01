const LIS = function (arr) {
  //TODO: 여기에 코드를 작성합니다.
  //수도코드
  //[1,2,3,1,4]
  //dp=[1,2,3,3,4]
  const N = arr.length;
  const dp = Array(N).fill(1);
  for (let i = 1; i < N; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i] && dp[i] < dp[j] + 1) {
        dp[i] = dp[i] + 1;
      }
    }
  }
  return Math.max(...dp);
};
