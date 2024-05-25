class Solution {
    public String reverseVowels(String s) {
        List<Character> vowels = Arrays.asList('a', 'e', 'i', 'o', 'u','A','E','I','O','U');
        List<Character> foundVowels = s.chars()
                .mapToObj(c -> (char) c)
                .filter(vowels::contains)
                .collect(Collectors.toList());

        Collections.reverse(foundVowels);
        System.out.println(foundVowels);
        StringBuilder result = new StringBuilder(s);
        int vowelIndex = 0;

        for (int i = 0; i < result.length(); i++) {
            if (vowels.contains(result.charAt(i))) {
                result.setCharAt(i, foundVowels.get(vowelIndex));
                vowelIndex++;
            }
        }
        return result.toString();
    }
}
