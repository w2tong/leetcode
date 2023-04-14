/**
 * @param {number} n
 * @return {boolean}
 */

// Solution 1 (using Set) better performance than cycle detection
var isHappy = function (n) {
    const seen = new Set();
    while (n !== 1) {
        if (seen.has(n)) return false;
        seen.add(n);
        n = n.toString();
        let sum = 0;
        for (let i = 0; i < n.length; i++) {
            sum += Number(n[i]) ** 2;
        }
        n = sum;
    }
    return true;
};

// Solution 2 (using cycle detection algorithm)
var isHappy = function (n) {
    let slow = next(n), fast = next(next(n));
    while (slow !== 1 && fast !== 1) {
        if (slow === fast) {
            return false;
        }
        slow = next(slow);
        fast = next(next(fast));
    }
    return true;
};

function next(n) {
    const str = n.toString().split('');
    const sum = str.reduce((sum, curr) => sum + Number(curr) ** 2, 0);
    return sum;
}