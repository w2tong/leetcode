/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    let curr = head;
    const map = new Map();
    while (curr) {
        map.set(curr, new Node(curr.val))
        curr = curr.next;
    }
    for (const [orig, copy] of map) {
        copy.next = map.get(orig.next) || null;
        copy.random = map.get(orig.random) || null;
    }
    return map.get(head);
};