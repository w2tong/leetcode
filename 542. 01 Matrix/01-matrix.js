/**
 * @param {number[][]} mat
 * @return {number[][]}
 */

// Dynamic Programming
var updateMatrix = function (mat) {
    const m = mat.length;
    const n = mat[0].length;
    const INF = m + n;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let top = INF, left = INF;
            if (mat[i][j] === 0) continue;
            if (i - 1 >= 0) top = mat[i - 1][j]
            if (j - 1 >= 0) left = mat[i][j - 1]
            mat[i][j] = Math.min(top, left) + 1;
        }
    }

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            if (mat[i][j] === 0) continue;
            let bot = INF, right = INF;
            if (i + 1 < m) bot = mat[i + 1][j]
            if (j + 1 < n) right = mat[i][j + 1]
            mat[i][j] = Math.min(mat[i][j], Math.min(bot, right) + 1);
        }
    }

    return mat;
};

// BFS
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