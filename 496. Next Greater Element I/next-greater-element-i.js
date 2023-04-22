/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    const map = new Map();
    const stack = [];
    for (let i = 0; i < nums2.length; i++) {
        while (stack.length > 0 && nums2[stack[stack.length - 1]] < nums2[i]) {
            map.set(nums2[stack.pop()], nums2[i]);
        }
        stack.push(i);
    }
    return nums1.map(num => map.get(num) || -1);
};