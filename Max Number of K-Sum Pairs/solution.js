/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
    const numCounts = new Map();
    let countOperations = 0;

    for (const num of nums) {
        const complement = k - num;
        if (numCounts.get(complement) > 0) {
            countOperations++;
            numCounts.set(complement, numCounts.get(complement) - 1);
        } else {
            numCounts.set(num, (numCounts.get(num) || 0) + 1);
        }
    }

    return countOperations;
};
