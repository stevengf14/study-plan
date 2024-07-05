/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let left = 0;
    let right = 0;

    for (let num of nums) {
        right += num;
    }
    for (let i = 0; i < nums.length; i++) {
        if (left == right - left - nums[i]) {
            return i;
        }
        left += nums[i];

    }
    return -1;
};
