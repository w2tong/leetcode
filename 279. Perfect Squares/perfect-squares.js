/**
 * @param {number} n
 * @return {number}
 */

const dp = [0];

var numSquares = function (n) {
    if (dp[n]) return dp[n];
    for (let i = 1; i <= n; i++) {
        let j = 1;
        let min = Infinity;
        while (i - j ** 2 >= 0) {
            min = Math.min(min, dp[i - j++ ** 2] + 1);
        }
        dp[i] = min;
    }
    return dp[n];
};
