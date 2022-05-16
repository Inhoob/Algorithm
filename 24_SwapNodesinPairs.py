# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # 1번 풀이 : 단순하게 값만 교환. but ListNode가 복잡해지는 경우 쓰기 어려울 수 있다.
        # cur = head

        # while cur and cur.next:
        #     cur.val, cur.next.val = cur.next.val, cur.val
        #     cur = cur.next.next

        # return head
        # 2번 풀이 = 반복문 구조. 바꾸는 건 간단하고
        root = prev = ListNode(None)
        prev.next = head
        while head and head.next:
            b = head.next
            head.next = b.next
            b.next = head

            prev.next = b

            head = head.next
            prev = prev.next.next

        return root.next
