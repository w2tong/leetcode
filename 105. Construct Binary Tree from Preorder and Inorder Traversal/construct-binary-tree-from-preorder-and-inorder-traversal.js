/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    var helper = function (pre_idx, in_l, in_r) {
        if (pre_idx >= preorder.length || in_l > in_r) return null;
        const root = new TreeNode(preorder[pre_idx]);
        let in_idx;
        for (let i = in_l; i <= in_r; i++) {
            if (inorder[i] === preorder[pre_idx]) {
                in_idx = i;
                break;
            }
        }
        root.left = helper(pre_idx + 1, in_l, in_idx - 1);
        root.right = helper(pre_idx + in_idx - in_l + 1, in_idx + 1, in_r);
        return root;
    }
    return helper(0, 0, inorder.length - 1);
};

