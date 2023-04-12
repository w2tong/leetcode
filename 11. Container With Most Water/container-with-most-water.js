/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let l = 0, r = height.length - 1;
    let max = 0;
    while (l < r) {
        lHeight = height[l];
        rHeight = height[r];
        max = Math.max(max, Math.min(lHeight, rHeight) * (r - l))
        if (lHeight < rHeight) {
            l++
        }
        else {
            r--;
        }
    }
    return max;
};