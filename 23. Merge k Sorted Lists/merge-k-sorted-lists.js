/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

// Solution 1 (using slice)
var mergeKLists = function (lists) {
    if (lists.length === 0) return null;
    if (lists.length === 1) return lists[0];
    const mid = Math.floor(lists.length / 2);
    const left = mergeKLists(lists.slice(0, mid));
    const right = mergeKLists(lists.slice(mid));
    return mergeTwoLists(left, right);
};

var mergeTwoLists = function (left, right) {
    const head = new ListNode();
    let curr = head;
    while (left && right) {
        if (left.val < right.val) {
            curr.next = left;
            left = left.next;
        }
        else {
            curr.next = right;
            right = right.next;
        }
        curr = curr.next;
    }
    if (left) {
        curr.next = left;
    }
    else {
        curr.next = right;
    }
    return head.next
}

// Solution 2 (using indices)
var mergeKLists = function (lists) {
    if (lists.length === 0) return null;
    var partition = function (left, right) {
        if (left === right) return lists[left];
        const mid = Math.floor((left + right) / 2);
        const leftList = partition(left, mid);
        const rightList = partition(mid + 1, right);
        return mergeTwoLists(leftList, rightList);
    }
    return partition(0, lists.length - 1);
};