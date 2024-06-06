/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    const n = nums.length;
    let aux = 0;
    for (let i = 0; i < n; i++) {
        if (nums[i] != 0) {
            nums[aux] = nums[i];
            if (i != aux) nums[i] = 0;
            aux += 1;
        }
    }
}
