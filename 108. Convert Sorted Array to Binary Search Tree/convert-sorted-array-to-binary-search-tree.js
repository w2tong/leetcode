/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

var sortedArrayToBST = function (nums) {
    return createBST(nums, 0, nums.length - 1);
};

var createBST = function (nums, start, end) {
    if (start > end) return null;
    let pivot = start + Math.floor((end - start) / 2);
    return new TreeNode(
        nums[pivot],
        createBST(nums, start, pivot - 1),
        createBST(nums, pivot + 1, end)
    )
}