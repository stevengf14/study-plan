class Solution {
    public String mergeAlternately(String word1, String word2) {
        String result = "";
        if(word1.length()>=1 && word2.length()<=100){
            int maxLength = word1.length()>=word2.length()? word1.length(): word2.length();
            for(int i = 0; i<maxLength; i++){
                if(i<word1.length()){
                    result += word1.charAt(i);
                }
                if(i<word2.length()){
                    result+=word2.charAt(i);
                }
            }
        }
        return result;
        
    }
}
