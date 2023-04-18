/**
 * @param {number[]} nums
 * @return {number}
 */

// Solution 1 using Set and checking adjacent numbers
var longestConsecutive = function (nums) {
    nums = new Set(nums);
    let max = 0;
    for (let num of nums) {
        if (nums.has(num - 1)) continue;
        let count = 1;
        while (nums.has(num + 1)) {
            count++;
            num = num + 1;
        }
        max = Math.max(max, count);
    }
    return max;
};

// Solution 2 using Map, checking adjacent numbers and updating boundaries
var longestConsecutive = function (nums) {
    const map = new Map();
    let max = 0;
    for (const num of nums) {
        if (map.has(num)) continue;
        const left = map.get(num - 1) || 0;
        const right = map.get(num + 1) || 0;
        const sum = left + right + 1;
        map.set(num, sum);
        max = Math.max(max, sum);
        map.set(num - left, sum);
        map.set(num + right, sum);
    }
    return max;
};