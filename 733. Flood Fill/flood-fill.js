/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
    const m = image.length;
    const n = image[0].length;
    const startingColor = image[sr][sc];
    if (startingColor === color) return image;

    var helper = function (row, col) {
        if (image[row][col] === startingColor) {
            image[row][col] = color;
            if (row - 1 >= 0) helper(row - 1, col);
            if (row + 1 < m) helper(row + 1, col);
            if (col - 1 >= 0) helper(row, col - 1);
            if (col + 1 < n) helper(row, col + 1);
        }
    }

    helper(sr, sc);
    return image;
};