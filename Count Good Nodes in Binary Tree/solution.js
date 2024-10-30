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
var goodNodes = function (root) {
    return dfs(root, root.val);
};

var dfs = function (node, maxSoFar) {
    if (node == null) return 0;

    let count = node.val >= maxSoFar ? 1 : 0;

    maxSoFar = Math.max(maxSoFar, node.val);

    count += dfs(node.left, maxSoFar);
    count += dfs(node.right, maxSoFar);

    return count;
}
