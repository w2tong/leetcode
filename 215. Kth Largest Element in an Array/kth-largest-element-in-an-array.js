/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    let low = 0, high = nums.length - 1, k_i = k - 1;
    while (low < high) {
        const pivot = partition(nums, low, high);
        if (pivot < k_i) {
            low = pivot + 1;
        }
        else if (pivot > k_i) {
            high = pivot - 1;
        }
        else {
            break;
        }
    }
    return nums[k_i]
};

function partition(nums, low, high) {
    const p = high;
    const pivot = nums[high--];
    while (low <= high) {
        if (nums[low] < pivot && nums[high] > pivot) {
            [nums[low], nums[high]] = [nums[high], nums[low]];
            low++;
            high--;
        }
        else if (nums[low] >= pivot) {
            low++;
        }
        else if (nums[high] <= pivot) {
            high--;
        }
    }
    [nums[p], nums[low]] = [nums[low], nums[p]];
    return low;
}