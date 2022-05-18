# Pseudo code
# last_occ는


class Solution:
    def removeDuplicateLetters(self, s: str) -> str:

        last_occ = {}
        stack = []
        visited = set()

        for i in range(len(s)):  # s = 'bcabc'라고 가정하자
            last_occ[s[i]] = i  # last_occ = {b:3,c:4,a:2}

        for i in range(len(s)):

            # s를 For loop돌리면 stack은 ['b'],['b','c'],['a'],['a','b'],['a','b','c'] 순으로 변하게 된다.
            if s[i] not in visited:
                while (stack and stack[-1] > s[i] and last_occ[stack[-1]] > i):
                    visited.remove(stack.pop())

                stack.append(s[i])

                visited.add(s[i])

        return ''.join(stack)
