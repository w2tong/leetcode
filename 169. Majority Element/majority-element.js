/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let curr = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            curr = nums[i];
        }
        if (nums[i] === curr) {
            count++;
        }
        else {
            count--;
        }
    }
    return curr;
};