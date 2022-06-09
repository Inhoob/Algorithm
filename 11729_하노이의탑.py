#하노이의 3개의 과정
#가장 무거운 한 개의 원반을 목적지에 두고 hanoi(N-1)의 과정을 반복한다.
#근데 생각해보면 재귀가 모두 동일하게 일어나는 것은 아니다. hanoi(3)의 시작부분과 4번째 과정을 생각하면
#hanoi(3)의 함수가 hanoi(2)의 함수를 거치지만 원반이 동일하게 움직이지 않는다.
#hanoi(N,start,to,via)를 N개의 원반을 start지점에서 via를 거쳐 to로 보낸다고 생각해보자.
#hanoi(3,'A','C','B')는 다음의 과정을 거친다.
#hanoi(2,'A','B','C'):start에서 3번까지
#이후 3번원반을 A에서 C로 옮긴다.
#hanoi(2,'B','C','A')
#자세한 내용 = https://shoark7.github.io/programming/algorithm/tower-of-hanoi 참고할 것
res = 1
N=int(input())
for i in range(N):
    res = 2*res
def hanoi(n,start,to,via):
    if n==1:
        print(start, to)
        return
    hanoi(n-1,start,via,to)
    print(start,to)
    hanoi(n-1,via,to,start)
print(res-1)
hanoi(N,1,3,2)