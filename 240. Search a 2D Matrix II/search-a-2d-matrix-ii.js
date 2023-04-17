/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let row = 0;
    let col = matrix[row].length - 1;
    while (row < matrix.length && col >= 0) {
        const val = matrix[row][col];
        if (target < val) col--;
        else if (target > val) row++;
        else return true;
    }
    return false;
};