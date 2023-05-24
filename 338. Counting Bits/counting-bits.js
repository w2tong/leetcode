/**
 * @param {number} n
 * @return {number[]}
 */

var countBits = function (n) {
    const res = [0];
    for (let i = 1; i <= n; i++) {
        res[i] = res[i >> 1] + (i % 2);
    }
    return res;
};