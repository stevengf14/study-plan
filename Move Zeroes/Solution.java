class Solution {
    public void moveZeroes(int[] nums) {
        int n = nums.length;
        int aux = 0;
        for (int i = 0; i < n; i++){
            if (nums[i] != 0){
                nums[aux] = nums[i];
                if (i != aux) nums[i] = 0;
                aux ++;
            }
        }
    }
}
