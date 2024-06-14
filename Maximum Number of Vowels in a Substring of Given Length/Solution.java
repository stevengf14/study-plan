class Solution {
    public int maxVowels(String s, int k) {
        Set<Character> vowels = new HashSet<>(Arrays.asList('a', 'e', 'i', 'o', 'u'));
        int max = 0;
        int current = 0;
        for (int i = 0; i < k; i++) {
            if (vowels.contains(s.charAt(i))) {
                current++;
            }
        }
        max = current;
        for (int i = k; i < s.length(); i++) {
            if (vowels.contains(s.charAt(i))) {
                current++;
            }
            if (vowels.contains(s.charAt(i - k))) {
                current--;
            }
            max = Math.max(current, max);
        }
        return max;
    }

}
