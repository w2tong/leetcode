/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    const arr = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];
        const highest = arr[arr.length - 1]
        if (num > highest) {
            arr.push(nums[i])
        }
        else if (num < highest) {
            let left = 0, right = arr.length - 1;
            while (left < right) {
                const mid = Math.floor((left + right) / 2);
                if (num > arr[mid]) left = mid + 1;
                else right = mid;
            }
            arr[right] = num;
        }
    }
    return arr.length;
};