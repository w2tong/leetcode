/**
 * @param {number} n
 * @return {string}
 */

const memo = [null, "1"];

var countAndSay = function (n) {
    if (memo[n]) return memo[n];
    const prev = countAndSay(n - 1);
    let count = 0;
    let num = prev[0];
    let res = '';
    for (let i = 0; i < prev.length; i++) {
        if (prev[i] !== num) {
            res += count.toString() + num;
            num = prev[i];
            count = 0;
        }
        count++;
    }
    res += count.toString() + num;
    memo[n] = res;
    return memo[n];
};