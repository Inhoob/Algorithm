class MyStack:
    from collections import deque
    # [2,3,4,1] 만약 여기서 5 추가하면 [5,2,3,4,1 ]이런식으로 나오게 해야함

    def __init__(self):
        self.q = deque()  # 큐의 구현은 덱으로

    def push(self, x: int) -> None:
        self.q.append(x)  # 이 x는 가장먼저 나가도록 만들어야함
        # 더해진요소를 맨 앞에 더하는 재정렬
        for _ in range(len(self.q)-1):
            self.q.append(self.q.popleft())

    def pop(self) -> int:
        return self.q.popleft()

    def top(self) -> int:
        return self.q[0]

    def empty(self) -> bool:
        return len(self.q) == 0


# Your MyStack object will be instantiated and called as such:
# obj = MyStack()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.top()
# param_4 = obj.empty()
