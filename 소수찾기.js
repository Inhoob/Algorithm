function isPrime(number) {
  if (number <= 1) return false;
  if (number === 2) return true;
  for (i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
function getPermutations(arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);
  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, selectNumber - 1);
    const attached = permutations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });
  return results;
}
function solution(numbers) {
  var answer = 0;
  result = [];
  let arr = numbers.split("");
  for (i = 1; i < arr.length + 1; i++) {
    result.push(getPermutations(arr, i).map((el) => Number(el.join(""))));
  }
  result = result.flat();

  const newresult = result.filter((el, idx) => {
    return result.indexOf(el) === idx;
  });
  for (let el of newresult) {
    if (isPrime(el)) answer++;
  }
  return answer;
}
