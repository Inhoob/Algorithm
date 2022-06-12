import sys

n = int(sys.stdin.readline())
tower = list(map(int, sys.stdin.readline().split()))
stack = []
goto = [0] * n

for i in range(n):
  temp = tower[i]
  while stack and tower[stack[-1]]<temp:
    stack.pop()
  if stack:
    goto[i]=stack[-1]+1
  stack.append(i)

print(' '.join(map(str,goto)))