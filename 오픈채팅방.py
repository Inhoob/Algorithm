def solution(records):
    answer = []
    info = {}
    for record in records:
        if record.split(' ')[0]=='Enter':
            info[record.split(' ')[1]]=record.split(' ')[2]
        if record.split(' ')[0]=='Change':
            info[record.split(' ')[1]]=record.split(' ')[2]
    
    for record in records:
        if record.split(' ')[0]=='Enter':
            answer.append(info[record.split(' ')[1]]+'님이 들어왔습니다.')
        if record.split(' ')[0]=='Leave':
            answer.append(info[record.split(' ')[1]]+'님이 나갔습니다.')
    return answer