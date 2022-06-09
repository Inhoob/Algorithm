N=int(input())
def pibo(N):
    if N==0:
        return 0
    if N==1:
        return 1
    return pibo(N-1)+pibo(N-2)
print(pibo(N))