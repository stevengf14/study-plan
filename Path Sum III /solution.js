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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
    const prefixSumMap = new Map();
    prefixSumMap.set(0, 1);
    return countPaths(root, 0, targetSum, prefixSumMap);
};

function countPaths(node, currentSum, targetSum, prefixSumMap) {
    if (node === null) return 0;

    currentSum += node.val;

    const sumCount = prefixSumMap.get(currentSum - targetSum) || 0;

    prefixSumMap.set(currentSum, (prefixSumMap.get(currentSum) || 0) + 1);

    const count = sumCount
        + countPaths(node.left, currentSum, targetSum, prefixSumMap)
        + countPaths(node.right, currentSum, targetSum, prefixSumMap);

    prefixSumMap.set(currentSum, prefixSumMap.get(currentSum) - 1);

    return count;
}
