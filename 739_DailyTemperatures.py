class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        # 1. 너무 쉬운방법으로 Brute Force가 있다
        # 당연히 시간초과. 10만이라는 숫자를 항상 생각하자. 표본이 10만개면 O(n^2)불가
        # stack = [0]*len(temperatures)
        # for i in range(len(temperatures)):
        #     for j in range(i+1,len(temperatures)):
        #         if temperatures[j]>temperatures[i]:
        #             stack[i]= j-i
        #             break

        # return stack
        # 2. stack 구조 이용
        # index를 계속 stack에 쌓아둔다. [0],[0,1] 이런식으로
        answer = [0]*len(temperatures)
        stack = []
        for i, cur in enumerate(temperatures):
            while stack and cur > temperatures[stack[-1]]:
                last = stack.pop()
                answer[last] = i-last
            stack.append(i)

        return answer
