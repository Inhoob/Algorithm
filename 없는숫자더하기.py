def solution(numbers):
    # 내가 생각한 풀이
    # fullNum = [i for i in range(10)]
    # new = []
    # for num in fullNum:
    #     if num not in numbers:
    #         new.append(num)
    # answer = 0
    # for i in new:
    #     answer +=i
    # return answer

    # pythonic한 풀이
    return sum([i for i in range(10) if i not in numbers])
