/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let res = [-1, -1];

    // Left element
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    if (nums[left] !== target) return res;
    res[0] = left;

    // Right element
    right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] > target) right = mid - 1;
        else left = mid + 1;
    }
    res[1] = right;
    return res;
};