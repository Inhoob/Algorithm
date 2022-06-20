//균형잡힌 문자열 = (,) 개수가 같은 경우
// 올바른 문자열 (,)의 짝이 맞아야함.
function solution(p) {
  let answer = "";
  let open = 0;
  let close = 0;
  if (p.length === 0) {
    return "";
  }
  for (let i = 0; i < p.length; i++) {
    if (p[i] === "(") open++;
    else close++;

    if (open === close) {
      if (check(p.slice(0, i + 1))) {
        answer = p.slice(0, i + 1) + solution(p.slice(i + 1)); //2,3번. u와 v로 분리후 v에대해서 재귀함수
        return answer;
      } else {
        answer = "(" + solution(p.slice(i + 1)) + ")"; //4-3
        for (let j = 1; j < i; j++) {
          //4-4 이 부분부터 도저히 감을 못잡았음.
          if (p[j] === "(") {
            answer = answer + ")";
          } else {
            answer = answer + "(";
          }
        }
        return answer; //도저히 생각이 안나는부분2. 이 return answer의 위치..
      }
    }
  }
  return answer;
}

function check(p) {
  let stack = [];
  for (let i = 0; i < p.length; i++) {
    if (p[i] === "(") stack.push(p[i]);
    else {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }
  return true;
}
arr = "()))((()";
console.log(solution(arr));
