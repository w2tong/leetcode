/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    if (!root) {
        return [];
    }
    let data = [];
    function helper(root) {
        if (root !== null) {
            data.push(root.val);
            helper(root.left);
            helper(root.right);
        }
        else {
            data.push('#');
        }
    }
    helper(root);
    return data.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    if (data.length === 0) return null;
    data = data.split(',');
    let i = 0;
    function helper() {
        if (i >= data.length) return null;
        if (data[i] === '#') {
            i++;
            return null;
        }
        const node = new TreeNode(parseInt(data[i++]));
        node.left = helper();
        node.right = helper();
        return node;
    }
    const head = helper();
    return head;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */