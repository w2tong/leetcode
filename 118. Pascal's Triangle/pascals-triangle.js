/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let res = new Array(numRows);
    for (let i = 0; i < numRows; i++) {
        res[i] = new Array(i + 1);
        res[i][0] = 1;
        res[i][i] = 1;
        for (let j = 1; j < i; j++) {
            res[i][j] = res[i - 1][j - 1] + res[i - 1][j]
        }
    }
    return res;
};