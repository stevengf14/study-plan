import java.util.Arrays;
class Solution {
    public List<Boolean> kidsWithCandies(int[] candies, int extraCandies) {
      List<Boolean> result = new ArrayList<>();
      int maxCandies = Arrays.stream(candies).max().orElseThrow();
      for (int i=0; i<candies.length; i++){
        result.add(candies[i]+extraCandies >= maxCandies);
      }
      return result;
    }
}
