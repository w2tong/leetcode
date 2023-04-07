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
 * @return {boolean}
 */
var isSymmetric = function (root) {
    return helper(root.left, root.right);
};

var helper = function (left, right) {
    if (left && right) {
        if (left.val !== right.val) return false;
        return helper(left.left, right.right) && helper(left.right, right.left)
    }
    else if (left || right) {
        return false;
    }
    return true;
}