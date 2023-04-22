/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    const m = grid.length;
    const n = grid[0].length;
    for (let i = 1; i < n; i++) {
        grid[0][i] += grid[0][i - 1];
    }
    for (let row = 1; row < m; row++) {
        grid[row][0] += grid[row - 1][0]
        for (let col = 1; col < n; col++) {
            grid[row][col] += Math.min(grid[row - 1][col], grid[row][col - 1])
        }
    }
    return grid[m - 1][n - 1];
};