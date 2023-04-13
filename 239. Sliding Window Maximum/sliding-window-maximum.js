/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    let right = k - 1;
    let res = [];
    let max = Math.max()
    let q = [];
    let start = 0;
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] > nums[q[q.length - 1]] && q.length > start) {
            q.pop();
        }
        if (q[start] < i - right) {
            start++;
        }
        q.push(i);
        if (i >= right) {
            res.push(nums[q[start]]);
        }
    }
    return res;
};