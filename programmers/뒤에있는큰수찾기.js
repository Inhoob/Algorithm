//틀린 풀이. for문 2개 사용 불가
function solution(numbers) {
  const answer = numbers.map((el, idx) => {
    for (let i = idx + 1; i < numbers.length; i++) {
      if (numbers[i] > el) {
        return numbers[i];
      }
    }
  });
  return answer.map((el) => {
    if (el === undefined) {
      return -1;
    } else {
      return el;
    }
  });
}

//맞는 풀이. stack 자료구조 사용
function solution(numbers) {
  const result = Array.from({ length: numbers.length }, () => -1);
  let stack = [];
  for (let i = 0; i < numbers.length; i++) {
    while (stack && numbers[stack.at(-1)] < numbers[i]) {
      result[stack.pop()] = numbers[i];
    }
    stack.push(i);
  }
  return result;
}
