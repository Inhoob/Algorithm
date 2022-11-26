function solution(quiz) {
  var answer = [];
  for (let i = 0; i < quiz.length; i++) {
    if (eval(quiz[i].split(" ").slice(0, 3).join("")) === eval(quiz[i].split(" ").slice(4).join(""))) {
      answer.push("O");
    } else {
      answer.push("X");
    }
  }
  return answer;
}

console.log(solution(["19 - 6 = 13", "-3 - 6 = -9", "5 - 15 = 63", "3 - 1 = 2"]));

//위의 풀이는 일부 테스트케이스에서 런타임에러가 나온다.
function solution(quiz) {
  return quiz
    .map((el) => el.split(" = "))
    .map((el) => {
      return eval(el[0]) == el[1] ? "O" : "X";
    });
}
