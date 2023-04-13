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
var sortList = function (head) {
    if (!head || !head.next) return head;
    let slow = head;
    let slowPrev = slow;
    let fast = head;
    while (fast && fast.next) {
        slowPrev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    slowPrev.next = null;
    const l1 = sortList(head);
    const l2 = sortList(slow);
    return merge(l1, l2);
};

function merge(l1, l2) {
    const head = new ListNode();
    let curr = head;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            curr.next = l1;
            l1 = l1.next;
        }
        else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }
    if (l1) {
        curr.next = l1;
    }
    else {
        curr.next = l2;
    }
    return head.next;
}