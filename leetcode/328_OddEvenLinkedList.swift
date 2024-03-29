/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public var val: Int
 *     public var next: ListNode?
 *     public init() { self.val = 0; self.next = nil; }
 *     public init(_ val: Int) { self.val = val; self.next = nil; }
 *     public init(_ val: Int, _ next: ListNode?) { self.val = val; self.next = next; }
 * }
 */
class Solution {
    func oddEvenList(_ head: ListNode?) -> ListNode? {
        if head == nil {
            return nil
        }

        var even = head
        var odd = head?.next
        var oddHead = odd
        while odd != nil && odd!.next != nil {
            even?.next = odd!.next
            even = even?.next!
            odd!.next = even?.next
            odd = odd!.next
        }

        even?.next = oddHead
        return head
    }
}