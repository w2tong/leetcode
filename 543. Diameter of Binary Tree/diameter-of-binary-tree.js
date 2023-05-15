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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    let max = 0;
    var maxDepth = function (node) {
        if (!node) return 0;
        const left = maxDepth(node.left);
        const right = maxDepth(node.right);
        max = Math.max(left + right, max);
        return Math.max(left, right) + 1;
    }
    maxDepth(root);
    return max;
};