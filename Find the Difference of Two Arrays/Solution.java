class Solution {
    public List<List<Integer>> findDifference(int[] nums1, int[] nums2) {
        Set<Integer> setNums1 = new HashSet<>();
        Set<Integer> setNums2 = new HashSet<>();

        for (int num : nums1) {
            setNums1.add(num);
        }
        for (int num : nums2) {
            setNums2.add(num);
        }

        List<Integer> diff1 = getDiff(setNums2, nums1);
        List<Integer> diff2 = getDiff(setNums1, nums2);

        List<List<Integer>> result = new ArrayList<>();
        result.add(diff1);
        result.add(diff2);
        return result;
    }

    public List<Integer> getDiff(Set<Integer> setNums, int[] nums) {
        Set<Integer> diff = new HashSet<>();
        for (int num : nums) {
            if (!setNums.contains(num)) {
                diff.add(num);
            }
        }
        return new ArrayList(diff);
    }
}
