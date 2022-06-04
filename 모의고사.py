def solution(answers):
    # 내 코드 => brute force로 한땀한땀 따진 뒤에 가장 높은 값의 인덱스 출력
    answer = []
    first = [1,2,3,4,5]
    second = [2,1,2,3,2,4,2,5]
    third = [3,3,1,1,2,2,4,4,5,5]
    score=[0,0,0]
    
    
    for i,v in enumerate(answers):
        if v == first[i%(len(first))]:
            score[0]+=1
        if v == second[i%(len(second))]:
            score[1]+=1
        if v == third[i%(len(third))]:
            score[2]+=1

    for i,v in enumerate(score):
        if v==max(score):
            answer.append(i+1)
    print(score)
    return answer