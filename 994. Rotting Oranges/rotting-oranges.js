/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    const m = grid.length;
    const n = grid[0].length;
    const queue = [];
    let freshCount = 0;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 2) queue.push([r, c]);
            else if (grid[r][c] === 1) freshCount++;
        }
    }

    let count = 0;
    while (queue.length > 0) {
        const len = queue.length;
        for (let i = 0; i < len; i++) {
            const [r, c] = queue.shift();
            if (r - 1 >= 0 && grid[r - 1][c] === 1) {
                queue.push([r - 1, c]);
                grid[r - 1][c] = 2;
                freshCount--;
            }
            if (r + 1 < m && grid[r + 1][c] === 1) {
                queue.push([r + 1, c]);
                grid[r + 1][c] = 2;
                freshCount--;
            }
            if (c - 1 >= 0 && grid[r][c - 1] === 1) {
                queue.push([r, c - 1]);
                grid[r][c - 1] = 2;
                freshCount--;
            }
            if (c + 1 < n && grid[r][c + 1] === 1) {
                queue.push([r, c + 1]);
                grid[r][c + 1] = 2;
                freshCount--;
            }
        }
        if (queue.length > 0) count++;
    }

    return freshCount > 0 ? -1 : count;
};