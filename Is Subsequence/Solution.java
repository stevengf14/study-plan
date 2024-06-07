class Solution {
    public boolean isSubsequence(String s, String t) {
        int n = s.length();
        if (n == 0)
            return true;
        boolean[] pointer = new boolean[n];

        int index = 0;
        for (int i = 0; i < t.length(); i++) {
            if (t.charAt(i) == s.charAt(index)) {
                pointer[index] = true;
                index++;
            }
            if(index>=n) break;
        }

        for (boolean b : pointer) {
            if (!b) {
                return false;
            }
        }
        return true;
    }
}
