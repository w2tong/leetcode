/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let left = 0, right = height.length - 1, leftMax = 0, rightMax = 0, rain = 0;
    while (left < right) {
        const leftHeight = height[left];
        const rightHeight = height[right];
        if (leftHeight < rightHeight) {
            if (leftHeight > leftMax) leftMax = leftHeight;
            else rain += leftMax - leftHeight;
            left++;
        }
        else {
            if (rightHeight > rightMax) rightMax = rightHeight;
            else rain += rightMax - rightHeight;
            right--;
        }
    }
    return rain;
};