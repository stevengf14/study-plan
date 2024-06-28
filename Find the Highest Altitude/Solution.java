class Solution {
    public int largestAltitude(int[] gain) {
        int max = 0;
        int distance = 0;
        int n = gain.length;

        for (int i = 0; i < n; i++) {
            distance += gain[i];
            if (distance > max)
                max = distance;
        }

        return max;
    }
}
