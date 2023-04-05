/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    const map = new Map();
    for (const num of nums1) {
        map.set(num, map.get(num) + 1 || 1);
    }
    let res = [];
    for (const num of nums2) {
        const val = map.get(num);
        if (val > 0) {
            res.push(num);
            map.set(num, val - 1);
        }
    }
    return res;
};