class Solution {
    public int compress(char[] chars) {
        int n = chars.length;
        if (n == 1) {
            return 1;
        }
        char last = chars[0];
        StringBuilder sb = new StringBuilder().append(last);
        int repeatedChars = 1;
        for (int i = 1; i < n; i++) {
            if (chars[i] == last) {
                repeatedChars++;
            } else {
                if (repeatedChars == 1) {
                    sb.append(chars[i]);
                } else {
                    sb.append(String.valueOf(repeatedChars));
                    sb.append(chars[i]);
                }
                repeatedChars = 1;
                last = chars[i];
            }
            if (i == n - 1 && repeatedChars > 1) {
                sb.append(String.valueOf(repeatedChars));
            }
        }
        for (int i = 0; i < sb.length(); i++) {
            chars[i] = sb.charAt(i);
        }
        return sb.length();
    }
}
