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
 * @return {number[]}
 */

// Solution 1 (level order traversal)
var rightSideView = function (root) {
    const res = [];
    let queue = [root];
    while (queue[0]) {
        const len = queue.length;
        res.push(queue[len - 1].val);
        for (let i = 0; i < len; i++) {
            const node = queue.shift();
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    return res;
};

// Solution 2 (DFS)
var rightSideView2 = function (root) {
    const res = [];
    function helper(node, depth) {
        if (!node) return;
        if (depth === res.length) res.push(node.val);
        helper(node.right, depth + 1);
        helper(node.left, depth + 1);
    }
    helper(root, 0);
    return res;
};