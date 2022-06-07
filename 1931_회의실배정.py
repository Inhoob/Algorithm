N = int(input())
time = []
ended = 0
cnt = 0
for i in range(N):
    start, end = map(int,input().split())
    time.append([start,end])

time = sorted(time, key=lambda x:x[0])
time = sorted(time, key=lambda x:x[1])

for i in time:
    if i[0]>=ended:
        ended = i[1]
        cnt+=1
    
print(cnt)