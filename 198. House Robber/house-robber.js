/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let maxTwoBefore = 0
    let maxOneBefore = 0;
    for (let i = 0; i < nums.length; i++) {
        let currMax = Math.max(maxOneBefore, maxTwoBefore + nums[i]);
        maxTwoBefore = maxOneBefore;
        maxOneBefore = currMax;
    }
    return maxOneBefore;
};