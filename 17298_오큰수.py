N=int(input())
arr = list(map(int,input().split()))
#arr = [3,5,2,7] result = [5,7,7,-1] 오른쪽에 큰 수가 있으면 그걸 프린트. 없으면 -1
# 만약 [9,5,4,8] 이면 [-1,8,8,-1]
stack = []
result = [-1]*N
for i in range(N):
    while stack and arr[stack[-1]]<arr[i]:
        result[stack.pop()]=arr[i]
    stack.append(i)
    
print(*result)