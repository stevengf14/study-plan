class Solution {
    public int maxOperations(int[] nums, int k) {
        Map<Integer, Integer> numCounts = new HashMap<>();
        int countOperations = 0;

        for (int num : nums) {
            int complement = k - num;
            if (numCounts.getOrDefault(complement, 0) > 0) {
                countOperations++;
                numCounts.put(complement, numCounts.get(complement) - 1);
            } else {
                numCounts.put(num, numCounts.getOrDefault(num, 0) + 1);
            }
        }
        
        return countOperations;
    }
}
