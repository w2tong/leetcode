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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    const res = []
    const queue = [root];
    let reverse = false;
    while (queue[0]) {
        let len = queue.length;
        let arr = []
        for (let i = 0; i < len; i++) {
            const node = queue.shift();
            arr.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        if (!reverse) {
            res.push(arr);
        }
        else {
            res.push(arr.reverse());
        }
        reverse = !reverse;
    }
    return res;
};