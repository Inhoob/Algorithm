//greedy한 방식으로 풀 수도 있겠지만 dfs를 활용하는 것이 낫다

function solution(storey) {
  let answer = Number.MAX_SAFE_INTEGER; //제일 낮은 answer를 구하기 위함.
  //num은 숫자, count는 층을 의미
  function dfs(num, count) {
    if (count >= answer) return;
    if (num === 0) {
      answer = count;
    } else {
      let res = num % 10;
      dfs(Math.floor(num / 10), count + res);
      dfs(Math.floor(num / 10) + 1, count + 10 - res);
    }
  }
  dfs(storey, 0);
  return answer;
}

console.log(solution(16));

/**
 * num=16, count 0이 처음 들어갔다고 하자
 * res는 num%10 이니까 6이 된다.
 * 이 경우 빠르게 가려면 17 18 19 20 10 0 이렇게 가야한다. 끝자리가 5이상인경우 위로가는게 빠르다.
 * */
