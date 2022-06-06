import heapq
def solution(scoville, K):
    #내 풀이 : 
    # under = []
    # added=0
    # count=0
    # for s in scoville:
    #     if s<K:
    #         under.append(s)
    
    # while len(under)>1:
    #     added = under[0]+under[1]*2 #[1,2,3] add=5
    #     under.pop(0)
    #     under.pop(0)
    #     under.append(added) # [3,5]
    #     under.sort()
    #     added=0
    #     count+=1
    #     if(min(under)>=K):
    #         break
        
        
    # return count
    heap = []
    for num in scoville:
      heapq.heappush(heap,num) #heapq = 가지고 있는 요소를 push,pop할 때마다 자동으로 정렬해줌

    mix_cnt = 0
    while heap[0]<K:
      try:
        heapq.heappush(heap, heapq.heappop(heap)+heapq.heappop(heap)*2)
      except IndexError:
        return -1
      mix_cnt+=1
    return mix_cnt