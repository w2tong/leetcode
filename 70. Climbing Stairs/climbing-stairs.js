/**
 * @param {number} n
 * @return {number}
 */

const memo = [1, 2]

var climbStairs = function (n) {
    if (memo[n - 1]) return memo[n - 1];
    for (let i = memo.length; i < n; i++) {
        memo[i] = memo[i - 1] + memo[i - 2];
    }
    return memo[n - 1];
};