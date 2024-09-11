/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
    const leaves1 = [];
    const leaves2 = [];
    getLeaves(root1, leaves1);
    getLeaves(root2, leaves2);
    return leaves1.toString() === leaves2.toString();
};

function getLeaves(node, leaves) {
    if (!node) return;
    if (!node.left && !node.right) {
        leaves.push(node.val);
    }
    getLeaves(node.left, leaves);
    getLeaves(node.right, leaves);
}
