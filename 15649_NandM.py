#백준 15649번.BackTracking 예제
#N과 M이 주어졌을 때 1부터 N까지의 자연수 중 중복없이 M개를 고른 수열
#한 줄에 하나씩 출력하며,수열은 사전 순으로 출력해야 한다.
#DFS를 이용해 풀었다.

n,m =map(int,input().split())
arr = [(i+1) for i in range(n)]
visited = [False]*len(arr)
a=[]

def dfs(x):
  if len(a)==m:
    print(*a)#comma 없이 인자만 출력
    return

  for i in range(n):
    if not visited[i]:
      visited[i]=True
      a.append(arr[i])
      dfs(x+1)
      a.pop()
      visited[i]=False
dfs(0)