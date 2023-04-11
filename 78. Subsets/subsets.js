/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    res = [];

    function backtrack(arr, start) {
        res.push(arr.slice());
        for (let i = start; i < nums.length; i++) {
            arr.push(nums[i]);
            backtrack(arr, i + 1);
            arr.pop();
        }
    }

    backtrack([], 0);
    return res;
};

