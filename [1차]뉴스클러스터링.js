//진짜 엄한데서 계속 발목잡혀서 제대로 풀질 못했다...
function solution(str1, str2) {
  function explode(text) {
    const result = [];
    for (let i = 0; i < text.length - 1; i++) {
      const node = text.substr(i, 2);
      if (node.match(/[A-Za-z]{2}/)) {
        result.push(node.toLowerCase());
      }
    }
    return result;
  }

  const arr1 = explode(str1);
  const arr2 = explode(str2);
  const set = new Set([...arr1, ...arr2]);
  let union = 0;
  let intersection = 0;

  set.forEach((item) => {
    //이 부분이 처음엔 이해 안됬는데 이런 경우엔 Math.max는 or, intersection은 and처리한 경우나 다름없다.max와 min의 의미를 잘 생각해볼것. 무조건 1또는 0만 더해진다.
    const has1 = arr1.filter((x) => x === item).length;
    const has2 = arr2.filter((x) => x === item).length;
    union += Math.max(has1, has2);
    intersection += Math.min(has1, has2);
  });
  return union === 0 ? 65536 : Math.floor((intersection / union) * 65536);
}

//1234 3456
//set = 123456 has1 = 4 has2 = 4
