/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
    const n = matrix.length - 1;
    let left = matrix[0][0];
    let right = matrix[n][n];
    let res = -1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const count = lessThanOrEqual(mid);
        if (count >= k) {
            right = mid - 1;
            res = mid;
        }
        else if (count < k) {
            left = mid + 1;
        }
        else {
            return mid;
        }
    }
    return res;

    function lessThanOrEqual(val) {
        let col = n;
        let count = 0;
        for (let row = 0; row <= n; row++) {
            if (col < 0) return count;
            while (col >= 0 && matrix[row][col] > val) {
                col--;
            }
            count += col + 1;
        }
        return count;
    }
};