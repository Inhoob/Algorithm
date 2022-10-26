function solution(sides) {
  let answer = 0;
  sides.sort((a, b) => a - b);
  for (let i = 1; i <= 1000; i++) {
    if (i < sides[0] + sides[1] && i >= sides[1]) {
      console.log("가장큰변", i);
      answer++;
    } else if (i + sides[0] > sides[1] && i < sides[1]) {
      console.log("작은변", i);
      answer++;
    }
  }
  return answer;
}

console.log(solution([11, 7]));
