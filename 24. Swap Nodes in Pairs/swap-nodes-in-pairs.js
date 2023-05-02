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
var swapPairs = function (head) {
    if (!head || !head.next) return head;
    let prev = new ListNode();
    let curr1 = head;
    let newHead = prev;
    while (curr1 && curr1.next) {
        let curr2 = curr1.next;
        prev.next = curr2;
        curr1.next = curr2.next;
        curr2.next = curr1;
        prev = curr1;
        curr1 = curr1.next;
    }
    return newHead.next;
};