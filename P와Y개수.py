def solution(s):
    # lowers = s.lower()
    # countp=0
    # county=0
    # for i in range(len(lowers)):
    #     if lowers[i]=='p':
    #         countp+=1
    #     if lowers[i]=='y':
    #         county+=1
    # if countp==county:
    #     return True
    # else:
    #     return False
    return s.lower().count('p') == s.lower().count('y')
