import java.util.StringTokenizer;

class Solution {
    public String reverseWords(String s) {
        List<String> words = new ArrayList<>();
        StringTokenizer st = new StringTokenizer(s.trim(), " ");
        while(st.hasMoreElements()){
            words.add(st.nextElement().toString().trim());
        }
        Collections.reverse(words);
        StringBuilder newS = new StringBuilder("");
        words.forEach(word -> {
            newS.append(word);
            newS.append(" ");
        });
        return newS.toString().trim();
    }

    public List<String> getWords(String s){
        List<String> words = new ArrayList<>();
        StringTokenizer st = new StringTokenizer(s.trim(), " ");
        while(st.hasMoreElements()){
            words.add(st.nextElement().toString().trim());
        }
        return words;
    }
}
