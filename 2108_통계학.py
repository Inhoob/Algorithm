from collections import Counter
n = int(input())
arr = []
sum = 0
for i in range(n):
    a = int(input())
    sum += a
    arr.append(a)

# arr=[1,3,8,-2,2]
arr.sort()
c = Counter(arr)
최빈값 = c.most_common(2)
if len(arr) > 1:
    if 최빈값[0][1] == 최빈값[1][1]:
        print(최빈값[1][0])
    else:
        print(최빈값[0][0])
else:
    print(최빈값[0][0])

print(round(sum/len(arr)))
print(arr[n//2])
if len(arr) > 1:
    if 최빈값[0][1] == 최빈값[1][1]:
        print(최빈값[1][0])
    else:
        print(최빈값[0][0])
else:
    print(최빈값[0][0])
print(max(arr)-min(arr))
