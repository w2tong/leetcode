/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
    let curr = root;
    while (curr) {
        next = curr.left;
        while (curr && curr.left) {
            curr.left.next = curr.right;
            curr.right.next = curr.next && curr.next.left;
            curr = curr.next;
        }
        curr = next;
    }
    return root;
};