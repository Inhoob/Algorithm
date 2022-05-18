T = int(input())
for _ in range(T):
    k = int(input())
    n = int(input())

    apart = [i for i in range(1, n+1)]  # [1,2,3,4,...,14]
    for i in range(k):
        for j in range(1, n):
            apart[j] += apart[j-1]
    print(apart[-1])
