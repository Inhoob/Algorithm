N = int(input())
#[1,2,3,3,4]
times = list(map(int,input().split()))
acc = 0
times.sort()
for i in range(1,N):
    times[i]+=times[i-1]

print(sum(times))