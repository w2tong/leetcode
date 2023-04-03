/**
 * @param {string} digits
 * @return {string[]}
 */

dict = ['', '', 'abc', 'def', 'ghi', 'jlk', 'mno', 'pqrs', 'tuv', 'wxyz']

var letterCombinations = function (digits) {
    let res = [];
    if (!digits) return res;
    const dfs = function (i, str) {
        if (i === digits.length) res.push(str);
        else {
            for (const letter of dict[digits[i]]) {
                dfs(i + 1, str + letter);
            }
        }
    }
    dfs(0, '');
    return res;
};