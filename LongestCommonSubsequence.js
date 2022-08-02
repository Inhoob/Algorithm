const LCS = function (str1, str2) {
  //TODO: 여기에 코드를 작성합니다.
  const M = str1.length;
  const N = str2.length;

  const table = [];
  for (let i = 0; i < M + 1; i++) {
    table.push(Array(N + 1).fill(-1));
  }
  for (let i = 0; i <= M; i++) {
    for (let j = 0; j <= N; j++) {
      if (i === 0 || j === 0) {
        table[i][j] = 0;
      } else if (str1[i - 1] === str2[j - 1]) {
        table[i][j] = table[i - 1][j - 1] + 1;
      } else {
        table[i][j] = Math.max(table[i - 1][j], table[i][j - 1]);
      }
    }
  }
  return table[M][N];
};
