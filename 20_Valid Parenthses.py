class Solution:
    def isValid(self, s: str) -> bool:
        stack = ['a']
        table = {
            '}': '{',
            ')': '(',
            ']': '['
        }
        for char in s:
            if char in table.keys():
                if stack.pop() != table[char]:
                    return False
            else:
                stack.append(char)

        return len(stack) == 1
