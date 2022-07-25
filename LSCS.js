const LSCS = function (arr) {
  //TODO: 여기에 코드를 작성합니다.
  let subArrSum = arr[0];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    subArrSum = Math.max(subArrSum + arr[i], arr[i]);
    max = Math.max(max, subArrSum);
  }
  return max;
};
