def solution(array, commands):
    # 이것이 내 방식 더러운 풀이
    # answer = []
    # result = []
    # for i in range(len(commands)):
    #     answer.append(array[commands[i][0]-1:commands[i][1]])
    #     answer[i].sort()
    #     result.append(answer[i][commands[i][2]-1])

    # return result

    # 이게 pythonic한 풀이
    return list(map(lambda x: sorted(array[x[0]-1:x[1]])[x[2]-1], commands))
