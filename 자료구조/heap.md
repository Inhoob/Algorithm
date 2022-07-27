## 힙(Heap)의 특징

- 힙은 완전 이진트리 자료구조의 일종
- 힙에서는 항상 루트 노드(node)를 제거한다

### 최소 힙(min heap)

- 루트 노드가 가장 작은 값을 가진다.
- 따라서 값이 작은 데이터가 우선적으로 제거된다.

### 최대 힙(max heap)

- 루트 노드가 가장 큰 값을 가진다.
- 따라서 값이 큰 데이터가 우선적으로 제거된다.

<img width="923" alt="tree" src="https://user-images.githubusercontent.com/102350319/181150215-5a3beddf-c06d-4464-b6c1-8991da5a6218.png">

## 성질

새로운 원소가 삽입될 때 O(logN)의 시간복잡도로 힙 성질을 유지하도록 할 수 있다.<br>
원소를 제거할 때 마지막 노드가 루트 노드에 위치할 수 있도록 한다.이 때 시간복잡도는 O(logN)이다.

힙은 기본적으로 이진트리이기 때문에 부모 노드의 인덱스: (idx - 1) / 2 를 내림한값 <br>왼쪽 자식노드의 인덱스: 2 x idx + 1 <br>오른쪽 자식노드의 인덱스: 2 x idx + 2

## 힙의 구현

```javascript
class MaxBinaryHeap {
  constructor() {
    this.values = []; // 힙은 일반적으로 배열로 표현한다.
  }

  // 배열의 맨 끝에 노드를 넣어주고 bubbleUp 메소드를 통해 힙의 특성에 맞게 노드들의 자리를 조정한다.
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  // 부모 노드의 인덱스를 찾아 올라가며 대소관계를 비교하여 자리를 바꿔준다.
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  // 가장 큰 값을 찾아 제거하고 리턴하는 메소드
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return max;
  }

  // 자식 노드의 인덱스를 찾아 내려가며 대소관계를 비교하여 자리를 바꿔준다.
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}
```
