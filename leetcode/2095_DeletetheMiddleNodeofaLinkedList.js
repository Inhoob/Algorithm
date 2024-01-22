/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//ListNode 구현
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
let input = [1, 3, 5, 6, 7, 8, 0];
let head = input.reverse().reduce((acc, curr) => {
  if (acc === null) {
    acc = new ListNode(curr);
  } else {
    acc = new ListNode(curr, acc);
  }
  return acc;
}, null);

var deleteMiddle = function (head) {
  let dummy = new ListNode(-1, head);
  let prevOfMiddle = dummy;
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    prevOfMiddle = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  prevOfMiddle.next = slow.next;
  return dummy.next;
};

/**
 * 원리 : two Pointer 알고리즘과 같다. 가운데의 listnode를 삭제하려면
 *  fast pointer.next 지점이 없을 때의 slow pointer의 지점을 제거하면 됨.
 *  */

deleteMiddle(head);
