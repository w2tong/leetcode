/**
 * @param {number[]} nums
 * @return {number}
 */

// Solution 1 (checks both sides)
var findPeakElement = function (nums) {
    if (nums.length === 1) return 0;
    if (nums[0] > nums[1]) return 0;
    if (nums[nums.length - 1] > nums[nums.length - 2]) return nums.length - 1;
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) return mid;
        else if (nums[mid] < nums[mid - 1]) right = mid - 1;
        else if (nums[mid] < nums[mid + 1]) left = mid + 1;
    }
    return left;
};

// Solution 2 assuming nums[i] != nums[i + 1] for all valid i.
var findPeakElement = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] < nums[mid + 1]) left = mid + 1;
        else right = mid;
    }
    return left;
};