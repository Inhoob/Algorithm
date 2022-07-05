const balancedBrackets = function (str) {
  // TODO: 여기에 코드를 작성합니다.
  let stack = [];
  for (let el of str) {
    if (el === "(" || el === "{" || el === "[") {
      stack.push(el);
    } else {
      //el이 닫는놈일때
      if (stack.length === 0) {
        return false;
      } else if (el === ")") {
        if (stack[stack.length - 1] === "(") {
          stack.pop();
        } else {
          return false;
        }
      } else if (el === "}") {
        if (stack[stack.length - 1] === "{") {
          stack.pop();
        } else {
          return false;
        }
      } else if (el === "]") {
        if (stack[stack.length - 1] === "[") {
          stack.pop();
        } else {
          return false;
        }
      }
    }
  }
  if (stack.length === 0) return true;
  else return false;
};
