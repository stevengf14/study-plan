/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
    const setNums1 = new Set(nums1);
    const setNums2 = new Set(nums2);

    const diff1 = [...setNums1].filter(num => !setNums2.has(num));
    const diff2 = [...setNums2].filter(num => !setNums1.has(num));

    return [diff1, diff2];
};
