/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    const row = new Set();
    const col = new Set();

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                row.add(i);
                col.add(j);
            }
        }
    }

    for (const r of row) {
        for (let j = 0; j < matrix[r].length; j++) {
            matrix[r][j] = 0;
        }
    }

    for (const c of col) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][c] = 0;
        }
    }
};
