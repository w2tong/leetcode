/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const memo = Array.from(Array(m), () => new Array(n).fill(0));
    var dfs = function (i, j) {
        if (memo[i][j]) return memo[i][j];
        let top = 0, bot = 0, left = 0, right = 0;
        if (i - 1 >= 0 && matrix[i - 1][j] > matrix[i][j]) {
            top = dfs(i - 1, j);
        }
        if (i + 1 < m && matrix[i + 1][j] > matrix[i][j]) {
            bot = dfs(i + 1, j);
        }
        if (j - 1 >= 0 && matrix[i][j - 1] > matrix[i][j]) {
            left = dfs(i, j - 1);
        }
        if (j + 1 < n && matrix[i][j + 1] > matrix[i][j]) {
            right = dfs(i, j + 1);
        }
        memo[i][j] = Math.max(top, bot, left, right) + 1;
        return memo[i][j];
    };
    let max = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            max = Math.max(dfs(i, j), max);
        }
    }
    return max;
};