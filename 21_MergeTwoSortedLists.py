# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:

        # list1이 비어있거나 list1이 list2보다 크다면 그 둘을 서로 바꾼다
        if not list1 or (list2 and list1.val > list2.val):
            list1, list2 = list2, list1  # 다중할당

        if list1:
            list1.next = self.mergeTwoLists(list1.next, list2)  # 재귀로 반복
        return list1
