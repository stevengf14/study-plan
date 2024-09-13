class Solution {
    public int[] successfulPairs(int[] spells, int[] potions, long success) {
        int[] pairs = new int[spells.length];
        Arrays.sort(potions); // Sort the potions array

        for (int i = 0; i < spells.length; i++) {
            int spell = spells[i];
            int low = 0, high = potions.length - 1;

            // Binary search to find the minimum potion that forms a successful pair
            while (low <= high) {
                int mid = low + (high - low) / 2;
                if ((long) spell * potions[mid] >= success) {
                    high = mid - 1;
                } else {
                    low = mid + 1;
                }
            }
            pairs[i] = potions.length - low;
        }
        return pairs;
    }
}
