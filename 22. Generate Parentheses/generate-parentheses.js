/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let arr = [];
    var generateParenthesisString = function (o, c, str) {
        if (o == 0) {
            arr.push(str + ')'.repeat(c));
            return;
        }
        if (o > 0) {
            generateParenthesisString(o - 1, c, str + '(')
        }
        if (c > o) {
            generateParenthesisString(o, c - 1, str + ')')
        }
    };
    generateParenthesisString(n, n, '');
    return arr;
};
