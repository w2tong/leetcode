/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    const map = {};
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = map[s[i]] + 1 || 1;
    }
    let odds = 0;
    for (const val of Object.values(map)) {
        if (val % 2 === 1) odds++;
    }
    return s.length - odds + (odds > 0 ? 1 : 0);
};