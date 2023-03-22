/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
    function neighborCount(row, col) {
        let count = 0;
        for (let i = Math.max(row - 1, 0); i <= Math.min(row + 1, board.length - 1); i++) {
            for (let j = Math.max(col - 1, 0); j <= Math.min(col + 1, board[i].length - 1); j++) {
                if (board[i][j] === 1 || board[i][j] === 3) {
                    if (i === row && j === col) {
                        continue;
                    }
                    count++;
                }
            }
        }
        return count;
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            const neighbors = neighborCount(i, j);
            if (board[i][j] === 0) {
                if (neighbors === 3) {
                    board[i][j] = 2;
                }
            }
            else {
                if (neighbors < 2 || neighbors > 3) {
                    board[i][j] = 3;
                }
            }
        }
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 2) {
                board[i][j] = 1;
            }
            else if (board[i][j] === 3) {
                board[i][j] = 0;
            }
        }
    }
};