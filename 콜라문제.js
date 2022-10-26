function solution(a, b, n) {
  //빈병 a개, 콜라b병을 주는데 총 n병
  var answer = 0;

  while (n >= a) {
    const remain = n % a;
    n = Math.floor(n / a) * b;
    answer += n;
    n += remain;
  }

  return answer;
}
//빈병 a개를 가져다주면 콜라b병을 주는데 빈병이 n개있으면 콜라를 몇개 얻을 수 잇는가?
/*
a=3, b=1, n=20이라 가정하자
1. n/a===6에 b를 곱한 값만큼의 new=6병을 얻을 수 있다. 이러면 총 빈병은 2+6=8병이 된다.answer=6
2. 8%a===2에 b를 곱한 값만큼의 new 2병을 얻을 수 있다. 이러면 총 빈병은 2+2=4병이 된다. answer = 8
3. 4%3===1 answer = 9
*/
console.log(solution(3, 1, 20));
