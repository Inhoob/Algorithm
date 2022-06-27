let bubbleSort = function (arr) {
  let N = arr.length;
  for (let i = 0; i < N; i++) {
    let swaps = 0;
    for (let j = 0; j < N - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swaps++;
        swap(j, j + 1, arr);
      }
    }
    if (swaps === 0) {
      break;
    }
  }
  return arr;
};

const swap = function (idx1, idx2, arr) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};
