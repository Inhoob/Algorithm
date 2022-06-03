from itertools import combinations
def is_prime(x):
    for i in range(2,x):
        if(x%i==0):
            return False
    return True
        
        
def solution(nums):
    answer = 0
    
    
    result = list(combinations(nums,3)) #result=[(1,2,3),(1,2,4),...]
    for i in range(len(result)):
        if(is_prime(sum(result[i])))==True:
            
            answer +=1
    return answer

    # 성능을 올리려면 is_primme의 for문의 범위를 sqrt(x)+1까지만 판별해도 괜찮음.
    # solution의 리턴을 return sum([is_prime(sum(i)) for i in combinations(nums,3)]) 으로 list comprehension으로 깔끔하게 표현 가능
