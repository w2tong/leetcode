/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    const set = new Set();
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[i][j] !== '.') {
                const s = `(${board[i][j]})`;
                const row = `${i}${s}`;
                const col = `${s}${j}`
                const sq = `${Math.floor(i / 3)}${s}${Math.floor(j / 3)}`
                if (set.has(row) ||
                    set.has(col) ||
                    set.has(sq)
                ) {
                    return false;
                }
                set.add(row);
                set.add(col);
                set.add(sq);
            }
        }
    }
    return true;
};