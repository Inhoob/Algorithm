function solution(distance, scope, times) {
  var answer = 0;
  let sortedScope = scope.map((v) => v.sort((a, b) => a - b));
  for (let i = 1; i <= distance; i++) {
    for (let j = 0; j < sortedScope.length; j++) {
      if (sortedScope[j][0] <= i && i <= sortedScope[j][1]) {
        if ((i - 1) % (times[j][0] + times[j][1]) < times[j][0]) return i;
      }
    }
  }
  return distance;
}

console.log(
  solution(
    12,
    [
      [7, 8],
      [4, 6],
      [11, 10],
    ],
    [
      [2, 2],
      [2, 4],
      [3, 3],
    ]
  )
);
