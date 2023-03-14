/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    for (let i = 0; i < matrix.length / 2; i++) {
        [matrix[i], matrix[matrix.length - i - 1]] = [matrix[matrix.length - i - 1], matrix[i]]
    }
    for (let j = 0; j < matrix.length - 1; j++) {
        for (let i = j + 1; i < matrix.length; i++) {
            [matrix[j][i], matrix[i][j]] = [matrix[i][j], matrix[j][i]]
        }
    }
};