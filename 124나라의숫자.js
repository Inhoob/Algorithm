//1=1 2=2 3=4 4=11 5=12 6=14 7=21 8=22 9=24 10=41
//10/3 = 3.333
//나머지가1일땐 1 나머지가2일땐 2 나머지가0일땐 4
function solution(n) {
  let answer = "";
  const arr = ["4", "1", "2"];
  while (n > 1) {
    answer = arr[n % 3] + answer;
    n = Math.floor((n - 1) / 3);
  }
  return answer;
}

console.log(solution(10));
