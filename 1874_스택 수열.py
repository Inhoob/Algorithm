N = int(input())
s = []
op = [] #+,- 저장
count = 1
temp = True
for i in range(N):
    num = int(input())
    while count<=num:
        s.append(count)
        op.append('+')
        count+=1
    if s[-1]==num:
        s.pop()
        op.append('-')
    else:
        temp = False

if temp == False:
    print('NO')
else:
    for i in op:
        print(i)