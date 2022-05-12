# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
from collections import deque 
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        q = deque()
        if not head: #만약 빈 객체라면 true 리턴
            return True
        
        node = head
        while node:
            q.append(node.val)
            node = node.next
        
        while len(q)>1: #head의 node가 남지 않을때까지 양 끝의 node를 뽑으면서 다른게 나온다면 False를 리턴한다.
            if q.popleft()!=q.pop():
                return False
                break
        return True