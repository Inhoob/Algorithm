function solution(N, stages) {
  let result = [];
  for (let i = 1; i <= N; i++) {
    let reach = stages.filter((x) => x >= i).length;
    let curr = stages.filter((x) => x === i).length;
    result.push([i, curr / reach]);
  }
  result.sort((a, b) => b[1] - a[1]);
  return result.map((x) => x[0]);
}

//인덱스와 값을 조율하는 부분을 잘 봐두자. 그리고 해시가 잘 안되는 경우에 그냥 이중배열로 풀어버리는 습관도 좋음.
