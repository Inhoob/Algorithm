def solution(new_id):
    # 전부 정규식만 사용해서 풀 수도 있지만 그 방법은 실제 코딩테스트에서 쓰기 어려울 듯 하다.
    import re
    # 1,2단계 : 정규식으로 소문자로 변환 후 소문자,숫자,'-','_','.'을 제외하고 전부 없애버림
    answer = re.sub('[^0-9a-z_.-]', '', new_id.lower())

    while '..' in answer:
        answer = answer.replace('..', '.')

    if answer[0] == '.':
        answer = answer[1:]
    if answer != '' and answer[-1] == '.':
        answer = answer[:-1]
    if answer == '':
        answer = 'a'
    if len(answer) >= 16:
        answer = answer[0:15]
        if answer[-1] == '.':
            answer = answer[0:14]
    if len(answer) <= 2:
        answer = answer+answer[-1]*(3-len(answer))

    return answer
