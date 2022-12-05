function solution(lines) {
  const xaxis = new Array(200).fill(0);
  lines.forEach(([a, b]) => {
    for (; a < b; a++) {
      xaxis[a + 100]++;
    }
  });
  return xaxis.reduce((a, c) => (c > 1 ? a + 1 : a), 0);
}
