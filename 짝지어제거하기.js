function solution(s) {
  let stack = [];

  for (i = 0; i < s.length; i++) {
    if (stack[stack.length - 1] !== s[i]) {
      stack.push(s[i]);
    } else {
      stack.pop();
    }

    //push랑 pop을 반대로 하면 한 예제에서 시간초과가 난다. 왜?
  }

  return stack.length ? 0 : 1;
}
