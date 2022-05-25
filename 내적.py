def solution(a, b):
    # 내가 했던 풀이
    # sum=0
    # for i in range(len(a)):
    #     sum+=a[i]*b[i]

    # return sum

    # 남이 풀어논거
    return sum([x*y for x, y in zip(a, b)])  # zip의 용법에 대해 잘 알아두자!
