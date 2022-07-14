// const insertionSort = function (arr, callBack) {
//   // TODO: 여기에 코드를 작성합니다.
//   for (let i = 1; i < arr.length; i++) {
//     let cur = arr[i];
//     let left = i - 1;

//     while (left >= 0 && arr[left] > cur) {
//       arr[left + 1] = arr[left];
//       arr[left] = cur;
//       cur = arr[left];
//       left--;
//     }
//   }
//   return arr;
// };

const insertionSort = function (arr, transform = (item) => item) {
  let sorted = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (transform(arr[i]) >= transform(sorted[i - 1])) {
      sorted.push(arr[i]);
    } else {
      for (let j = 0; j < i; j++) {
        if (transform(arr[i]) <= transform(sorted[j])) {
          const left = sorted.slice(0, j);
          const right = sorted.slice(j);
          sorted = left.concat(arr[i], right);
          break;
        }
      }
    }
  }

  return sorted;
};
