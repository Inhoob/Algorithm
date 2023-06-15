function solution(name, yearning, photo) {
  const obj = {};
  name.forEach((el, idx) => {
    obj[el] = yearning[idx];
  });

  const answer = photo.map((el) => {
    let count = 0;
    for (let i = 0; i < el.length; i++) {
      if (obj[el[i]]) {
        count += obj[el[i]];
      }
    }
    return count;
  });

  return answer;
}
