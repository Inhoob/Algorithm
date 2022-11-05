function solution(line) {
  var answer = "";
  let stack = [];
  /**line[i]를 stack이 포함하고 있는가를 따져보고 있으면 별  */
  for (let i = 0; i < line.length; i++) {
    if (line[i - 1] === line[i]) {
      stack.push("*");
    } else {
      stack.push(line[i]);
    }
  }
  for (let i = 0; i < stack.length; i++) {
    if (stack[i - 1] === "*" && stack[i] === "*") {
      stack.splice(i, 1);
      i -= 1;
    }
  }
  return stack.join("");
}
console.log(solution("helllllllo"));
