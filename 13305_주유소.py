N=int(input())
dis = list(map(int,input().split()))
cost = list(map(int,input().split()))
res = 0
min_cost = cost[0]
# distance의 관점으로 보자.
#dis[0]은 무조건 cost[0]의 돈으로 감. 근데 dis[1]은 cost[0]과 cost[1]중에 더 싼걸로 결정 dis[2]는 cost[0],cost[1],cost[2]중에싼거
for i in range(len(dis)):
    if cost[i]<min_cost:
        min_cost = cost[i]
    res+=dis[i]*min_cost
print(res)