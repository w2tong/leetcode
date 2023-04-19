/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Solution 1 moving forwards
var canJump = function (nums) {
    let i = 0;
    let max = 0;
    while (i < nums.length && i <= max) {
        max = Math.max(max, i + nums[i]);
        i++;
    }
    return i === nums.length;
};

// Solution 2 moving backwards
var canJump2 = function (nums) {
    let goal = nums.length - 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        if (i + nums[i] >= goal) {
            goal = i;
        }
    }
    return !goal;
}