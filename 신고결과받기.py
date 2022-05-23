def solution(id_list, report, k):

    # 한번에 한 명의 유저
    # k번 이상 = 정지, 리폿 먹인 사람은 정지사실 통보받음. 이 과정은 마지막에 한꺼번에 이루어짐
    # answer = 각 유저가 받은 메일의 수
    # Pseudo code
    # report를 for문으로 돌면서 report[i][1]의 count가 k가 되면 밴이 된다. 그 경우
    # id_list에서 report[i][0]에 해당하는 이름과 같은 인덱스를 result의 인덱스에 1을 추가
    stop = []
    answer = [0] * len(id_list)
    dicReports = {id: [] for id in id_list}
    for i in set(report):
        report = i.split(' ')
        stop.append(report[1])
        dicReports[report[0]].append(report[1])

    stop = set([i for i in stop if stop.count(i) >= k])

    for key, value in dicReports.items():
        for s in stop:
            if s in value:
                answer[id_list.index(key)] += 1
    return answer
