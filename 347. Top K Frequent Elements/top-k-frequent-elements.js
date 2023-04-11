/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const freq = new Map();
    for (const n of nums) {
        freq.set(n, freq.get(n) + 1 || 1);
    }
    let bucket = [];
    for (const [key, val] of freq) {
        if (!bucket[val]) {
            bucket[val] = [key]
        }
        else {
            bucket[val].push(key);
        }
    }
    const res = [];
    for (let i = bucket.length - 1; i >= 0 && res.length < k; i--) {
        if (bucket[i]) {
            res.push(...bucket[i]);
        }
    }
    return res.slice(0, k);
};