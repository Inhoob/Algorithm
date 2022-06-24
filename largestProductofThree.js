const largestProductOfThree = function (arr) {
  // TODO: 여기에 코드를 작성합니다.1,2,3 1,2,4 2,3,4
  return Math.max(...combination(arr, 3).map((x) => x[0] * x[1] * x[2]));
};

function combination(arr, selectNum) {
  const result = [];
  if (selectNum === 1) return arr.map((v) => [v]);
  arr.forEach((v, idx, arr) => {
    const fixed = v;
    const restArr = arr.slice(idx + 1);
    const combinationArr = combination(restArr, selectNum - 1);
    const combineFix = combinationArr.map((v) => [fixed, ...v]);
    result.push(...combineFix);
  });
  return result;
}
