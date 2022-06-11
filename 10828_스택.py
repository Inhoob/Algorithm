import sys
N = int(sys.stdin.readline())
stack = []

for i in range(N):
    word = (sys.stdin.readline()).split()
    order = word[0]
    if order == 'push':
        stack.append(word[1])
    if order == 'pop':
        if not stack:
            print(-1)
        else:
            print(stack[-1])
            stack = stack[0:-1]

    if order == 'size':
        print(len(stack))
    if order == 'empty':
        if len(stack):
            print(0)
        else:
            print(1)
    if order == 'top':
        if not stack:
            print(-1)
        else:
            print(stack[-1])