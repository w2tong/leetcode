/**
 * @param {number[]} nums
 * @return {number}
 */

// Time: O(n) Space: O(n)
var findDuplicate = function (nums) {
    const set = new Set();
    for (let num of nums) {
        if (set.has(num)) return num;
        set.add(num);
    }
};

// Time: O(n), Space: O(1)
var findDuplicate = function (nums) {
    let slow = 0;
    let fast = 0;

    while (true) {
        slow = nums[slow];
        fast = nums[nums[fast]];
        if (slow == fast) {
            break;
        }
    }
    let slow2 = 0;

    while (true) {
        slow = nums[slow];
        slow2 = nums[slow2];
        if (slow == slow2) {
            break;
        }
    }
    return slow;
};