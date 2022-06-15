function solution(numbers, target) {
  var answer = 0;
  function dfs(idx, sum) {
    //dfs는 idx를 증가시키면서 sum=0에서부터 계속 numbers의 idx를 더하거나 뺀다.
    if (idx === numbers.length) {
      if (sum === target) {
        answer += 1;
      }
      return;
    }
    dfs(idx + 1, sum + numbers[idx]);
    dfs(idx + 1, sum - numbers[idx]);
  }
  dfs(0, 0, numbers);
  return answer;
}
