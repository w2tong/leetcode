/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let lo = 0;
    let hi = nums.length - 1;
    const res = new Array(nums.length);
    for (let i = nums.length - 1; i >= 0; i--) {
        if (Math.abs(nums[lo]) >= Math.abs(nums[hi])) res[i] = nums[lo++] ** 2;
        else res[i] = nums[hi--] ** 2;
    }
    return res;
};