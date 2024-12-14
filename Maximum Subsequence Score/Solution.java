class Solution {
    public long maxScore(int[] nums1, int[] nums2, int k) {
        int n = nums1.length;
        int[][] pairs = new int[n][2];

        // Pair elements from nums1 and nums2
        for (int i = 0; i < n; i++) {
            pairs[i][0] = nums1[i];
            pairs[i][1] = nums2[i];
        }

        // Sort pairs by nums2 in descending order
        Arrays.sort(pairs, (a, b) -> b[1] - a[1]);

        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        long sum = 0, maxScore = 0;

        // Iterate through pairs
        for (int i = 0; i < n; i++) {
            sum += pairs[i][0];
            minHeap.add(pairs[i][0]);

            if (minHeap.size() > k) {
                sum -= minHeap.poll();
            }

            if (minHeap.size() == k) {
                maxScore = Math.max(maxScore, sum * pairs[i][1]);
            }
        }

        return maxScore;
    }
}
