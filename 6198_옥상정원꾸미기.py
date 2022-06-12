n = int(input())

floor = [int(input()) for i in range(n)]
stack = []
result = 0

for i in range(n):
    while stack and stack[-1] <= floor[i]:
        stack.pop()

    stack.append(floor[i])
    result += len(stack) -1

print(result)
#stack=[10], result = 0
#stack = [10,3] result = 1
#stack = [10,7] result = 2
#stack = [10,7,4] result = 4
#stack = [12] result = 4
#stack = [12,2]result = 5
#나로썬 생각하기 어려운 논리였다.. 그냥 비슷한 유형을 자주 보면서 패턴을 외워야 할 듯
