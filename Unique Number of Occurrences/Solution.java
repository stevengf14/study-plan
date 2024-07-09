class Solution {
    public boolean uniqueOccurrences(int[] arr) {
        Map<Integer, Integer> occurrences = new HashMap<>();
        for (int num : arr) {
            if (occurrences.containsKey(num)) {
                occurrences.put(num, occurrences.get(num) + 1);
            } else {
                occurrences.put(num, 1);
            }
        }

        Set<Integer> values = new HashSet<>();
        for (Integer value : occurrences.values()) {
            if (!values.add(value))
                return false;
        }
        return true;
    }
}
