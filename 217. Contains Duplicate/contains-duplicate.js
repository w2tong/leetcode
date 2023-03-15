/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let numsObj = {};
    for (let num of nums) {
        numsObj[num] = 0;
    }
    return Object.keys(numsObj).length !== nums.length;
};