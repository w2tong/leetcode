/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
    nums12 = new Map();
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            nums12.set(nums1[i] + nums2[j], nums12.get(nums1[i] + nums2[j]) + 1 || 1);
        }
    }

    let count = 0;
    for (let i = 0; i < nums3.length; i++) {
        for (let j = 0; j < nums4.length; j++) {
            const nums = nums12.get(-(nums3[i] + nums4[j]));
            if (nums) {
                count += nums;
            }
        }
    }
    return count;
};