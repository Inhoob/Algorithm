def solution(lottos, win_nums):
    # 답의개수가 0개,1개면 rank[0],rank[1]이 되는식임
    rank = [6, 6, 5, 4, 3, 2, 1]
    right = 0
    for i in lottos:
        if i in win_nums:
            right += 1
    zeros = lottos.count(0)
    return rank[right+zeros], rank[right]
