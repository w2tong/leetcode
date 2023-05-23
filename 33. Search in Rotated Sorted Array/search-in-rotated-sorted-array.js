/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    // Find pivot
    while (left < right) {
        const mid = (left + right) >> 1;
        if (nums[mid] > nums[right]) left = mid + 1;
        else right = mid;
    }

    // Adjust left and right based on pivot and target
    let pivot = left;
    if (target >= nums[pivot] && target <= nums[nums.length - 1]) {
        left = pivot;
        right = nums.length - 1;
    }
    else {
        left = 0;
        right = pivot;
    }

    // Find target
    while (left <= right) {
        const mid = (left + right) >> 1
        if (nums[mid] > target) right = mid - 1;
        else if (nums[mid] < target) left = mid + 1;
        else return mid;
    }
    return -1;
};