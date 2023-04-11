/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    res = [];
    backtrack(res, nums, [], new Array(nums.length).fill(false));
    return res;
};

function backtrack(res, nums, arr, used) {
    if (arr.length === nums.length) {
        res.push(arr.slice());
        return;
    }
    for (let i = 0; i < nums.length; i++) {
        if (used[i]) continue;
        arr.push(nums[i]);
        used[i] = true;
        backtrack(res, nums, arr, used);
        arr.pop();
        used[i] = false;
    }
}