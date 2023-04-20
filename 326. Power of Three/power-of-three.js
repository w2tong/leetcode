/**
 * @param {number} n
 * @return {boolean}
 */

// Solution 1 iterative bottom-top
var isPowerOfThree = function (n) {
    let i = 1;
    while (i < n) i *= 3;
    return n === i;
};

// Solution 2 iterative top-bottom
var isPowerOfThree2 = function (n) {
    if (n === 0) return false;
    while (n % 3 === 0) n /= 3
    return n === 1;
};

// Solution 3 precompute powers of 3
const set = new Set();
for (let i = 0, powOf3 = 1; i <= 19; i++, powOf3 *= 3) set.add(powOf3);
var isPowerOfThree3 = function (n) {
    return set.has(n);
};