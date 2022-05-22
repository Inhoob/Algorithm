def solution(s):
    words = {
        'zero': '0',
        'one': '1',
        'two': '2',
        'three': '3',
        'four': '4',
        'five': '5',
        'six': '6',
        'seven': '7',
        'eight': '8',
        'nine': '9'
    }
    answer = ''
    spelling = ''
    for i in s:
        if i.isdigit() == True:  # 일단 숫자는 다 뺀다.
            answer += i
            continue
        spelling += i  # 스펠링을계속 더해준다. 예를들어 t,h,r,e,e 가 완성될때까지 계속 문자열을 더한 후
        if spelling in words:  # 스펠링이 words의 키로 있으면 그 value 값을 출력해주고 spelling을 비워서 다음 문자를 받도록 함
            answer += words[spelling]
            spelling = ""

    return int(answer)
