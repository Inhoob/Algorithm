N=int(input())
arr = [int(input()) for i in range(N)]
arr.sort()
arr_sum =set()
for i in arr:
    for j in arr:
        arr_sum.add(i+j)
result = 0
for i in range(N-1,-1,-1):#4,3,2,1,0 순으로 서칭
    for j in range(i+1):#0,1,2,3 / 0,1,2 / 0,1 / 0 / None 순으로 서칭
        
        if arr[i]-arr[j] in arr_sum:
            result = arr[i]
            break
    if result:
        break
            

print(result)
