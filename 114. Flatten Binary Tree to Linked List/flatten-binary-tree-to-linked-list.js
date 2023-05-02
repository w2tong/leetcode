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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    let curr = null;
    function helper(node) {
        if (!node) return;
        helper(node.right);
        helper(node.left);
        node.right = curr;
        node.left = null;
        curr = node;
    }
    helper(root)
    return root;
};