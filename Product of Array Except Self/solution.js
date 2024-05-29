/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const n = nums.length;
    var answer = new Array(n);
    answer[0] = 1;
    for (let i = 1; i < n; i++) {
        answer[i] = answer[i - 1] * nums[i - 1];
    }
    let rightProd = 1;
    for (let i = n - 1; i >= 0; i--) {
        answer[i] *= rightProd;
        rightProd *= nums[i];
    }
    return answer;
};
