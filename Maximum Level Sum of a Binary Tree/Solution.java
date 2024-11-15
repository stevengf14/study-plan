/**
 * Definition for a binary tree node.
 * public class TreeNode {
 * int val;
 * TreeNode left;
 * TreeNode right;
 * TreeNode() {}
 * TreeNode(int val) { this.val = val; }
 * TreeNode(int val, TreeNode left, TreeNode right) {
 * this.val = val;
 * this.left = left;
 * this.right = right;
 * }
 * }
 */
class Solution {
    public int maxLevelSum(TreeNode root) {
        if (root == null)
            return 0;

        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        int maxSum = Integer.MIN_VALUE;
        int level = 1, maxLevel = 1;

        while (!queue.isEmpty()) {
            int levelSum = 0, size = queue.size();

            for (int i = 0; i < size; i++) {
                TreeNode node = queue.poll();
                levelSum += node.val;

                if (node.left != null)
                    queue.offer(node.left);
                if (node.right != null)
                    queue.offer(node.right);

            }
            if (levelSum > maxSum) {
                maxSum = levelSum;
                maxLevel = level;
            }
            level++;
        }
        return maxLevel;
    }
}
