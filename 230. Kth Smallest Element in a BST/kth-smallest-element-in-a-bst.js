/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    let count = k;
    let number = null;

    function helper(node) {
        if (node.left) {
            helper(node.left);
        }
        count--;
        if (count === 0) {
            number = node.val;
            return;
        }
        if (node.right) {
            helper(node.right);
        }
    }

    helper(root);
    if (number !== null) return number;
    return -1;
};