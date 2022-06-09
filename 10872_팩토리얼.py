N = int(input())
#N!를 출력하시오
#10*9*8*7*6

def factorial(N):
    result = 1
    if N>0:
        result = N*factorial(N-1)
    return result

print(factorial(N))