function swap(idx1, idx2, arr) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function getParentIdx(idx) {
  return Math.floor((idx - 1) / 2);
}
function insert(heap, item) {
  heap.push(item);
  let curIdx = heap.length - 1;
  let pIdx = getParentIdx(curIdx);
  while (pIdx >= 0 && heap[pIdx] < heap[curIdx]) {
    swap(curIdx, pIdx, heap);
    curIdx = pIdx;
    pIdx = getParentIdx(curIdx);
  }
  return heap;
}

function binaryHeap(arr) {
  return arr.reduce((heap, item) => {
    return insert(heap, item);
  }, []);
}
