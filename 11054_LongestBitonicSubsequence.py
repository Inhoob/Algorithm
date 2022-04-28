#[10,20,35,25,20]처럼 가장큰 숫자를 기준으로 오름차순,내림차순만 있는 수열
#백준 11054, Dynamic Programming
x= int(input())
case = list(map(int,input().split()))
reverse_case = case[::-1] #입력되는수열을 역순으로 출력해준다
increase = [1 for _ in range(x)]
decrease = [1 for _ in range(x)]

for i in range(x):
    for j in range(i):
        if case[i]>case[j]:
            increase[i]=max(increase[i],increase[j]+1) #가장 긴 증가하는 부분수열
        if reverse_case[i]>reverse_case[j]:
            decrease[i]=max(decrease[i],decrease[j]+1) #가장 긴 감소하는 부분수열

result = [0 for i in range(x)]
for i in range(x):
    result[i]=increase[i]+decrease[x-1-i]-1 #decrease에서는 index가 반대로 되어있음.

print(max(result))