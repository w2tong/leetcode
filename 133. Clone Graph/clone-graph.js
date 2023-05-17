/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */

// Using map with node.val as key
var cloneGraph = function (node) {
    if (!node) return node;
    const map = {};
    const helper = function (node) {
        if (map[node.val]) return map[node.val];
        map[node.val] = new Node(node.val);
        map[node.val].neighbors = node.neighbors.map(helper)
        return map[node.val];
    }
    return helper(node);
};

// Create copy property on each node
var cloneGraph = function (node) {
    if (!node) return node;
    const helper = function (node) {
        if (node.copy) return node.copy;
        node.copy = new Node(node.val);
        for (const neighbor of node.neighbors) {
            node.copy.neighbors.push(helper(neighbor));
        }
        return node.copy;
    }
    return helper(node);
};