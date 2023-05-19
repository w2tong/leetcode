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
            for (const [dr, dc] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
                const rr = r + dr;
                const cc = c + dc;
                if (rr < 0 || rr >= m || cc < 0 || cc >= n) continue;
                if (grid[rr][cc] === 1) {
                    queue.push([rr, cc]);
                    grid[rr][cc] = 2;
                    freshCount--;
                }
            }
        }
        if (queue.length > 0) count++;
    }

    return freshCount > 0 ? -1 : count;
};