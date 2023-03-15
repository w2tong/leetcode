/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    let chars = {};
    for (let char of s) {
        chars[char] = (chars[char] || 0) + 1
    }
    for (let char of t) {
        if (!chars[char]) return false;
        chars[char]--;
    }
    for (let char of Object.keys(chars)) {
        if (chars[char] !== 0) return false;
    }
    return true;
};