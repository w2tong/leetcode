/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
    const m = mat.length;
    const n = mat[0].length;
    const queue = [];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 0) queue.push([i, j]);
            else mat[i][j] = -1;
        }
    }

    while (queue.length > 0) {
        const [x, y] = queue.shift();
        if (x - 1 >= 0 && mat[x - 1][y] < 0) {
            queue.push([x - 1, y]);
            mat[x - 1][y] = mat[x][y] + 1;
        }
        if (x + 1 < m && mat[x + 1][y] < 0) {
            queue.push([x + 1, y]);
            mat[x + 1][y] = mat[x][y] + 1;
        }
        if (y - 1 >= 0 && mat[x][y - 1] < 0) {
            queue.push([x, y - 1]);
            mat[x][y - 1] = mat[x][y] + 1;
        }
        if (y + 1 < n && mat[x][y + 1] < 0) {
            queue.push([x, y + 1]);
            mat[x][y + 1] = mat[x][y] + 1;
        }
    }

    return mat;
};