/**
 * @param {number} n
 * @return {number}
 */

const memo = [0];

var numSquares = function (n) {
    if (memo[n]) return memo[n];
    for (let i = 1; i <= n; i++) {
        let min = Infinity;
        let j = 1;
        while (i - j ** 2 >= 0) {
            min = Math.min(min, memo[i - j ** 2] + 1);
            j++;
        }
        memo[i] = min;
    }
    return memo[n];
};
