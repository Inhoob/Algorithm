function solution(clothes) {
  let obj = {};
  clothes.forEach(function (el, idx) {
    if (obj[el[1]]) {
      obj[el[1]]++;
    } else {
      obj[el[1]] = 1;
    }
  });
  answer = 1;
  for (let i in obj) {
    answer = answer * (obj[i] + 1);
  }

  return answer - 1;
}
