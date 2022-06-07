N,K= map(int, input().split())
coins = []
cnt= 0
for i in range(N):
    coins.append(int(input()))
    
coins = sorted(coins,reverse=True)
for coin in coins:
    if coin>K:
        continue
    else:
        div = K//coin
        cnt+=div
        K=K-coin*div
print(cnt)