/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    strs.sort();
    for (let i = 0; i < strs[0].length; i++) {
        if (strs[0][i] !== strs[strs.length - 1][i]) return strs[0].slice(0, i);
    }
    return strs[0];
};

var longestCommonPrefix2 = function (strs) {
    for (let c = 0; c < strs[0].length; c++) {
        for (let i = 1; i < strs.length; i++) {
            if (c >= strs[i].length || strs[0][c] !== strs[i][c]) {
                return strs[0].slice(0, c);
            }
        }
    }
    return strs[0];
};