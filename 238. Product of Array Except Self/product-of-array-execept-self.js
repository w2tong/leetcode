/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let res = new Array(nums.length).fill(1);
    let product = nums[0];
    for (let i = 1; i < nums.length; i++) {
        res[i] *= product;
        product *= nums[i];
    }
    product = nums[nums.length - 1];
    for (let i = nums.length - 2; i >= 0; i--) {
        res[i] *= product;
        product *= nums[i];
    }

    return res;
};