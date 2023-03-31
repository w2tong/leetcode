/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let red = white = 0;
    for (let num of nums) {
        if (num === 0) red++;
        else if (num === 1) white++;
    }
    for (let i = 0; i < nums.length; i++) {
        if (red) {
            red--;
            nums[i] = 0;
        }
        else if (white) {
            white--;
            nums[i] = 1;
        }
        else {
            nums[i] = 2;
        }
    }
};

// Dutch national flag problem algorithm
var sortColors2 = function (nums) {
    let red = white = 0;
    let blue = nums.length - 1;
    while (white <= blue) {
        if (nums[white] === 0) {
            [nums[red], nums[white]] = [nums[white], nums[red]];
            red++;
            white++;
        }
        else if (nums[white] === 1) {
            white++;
        }
        else {
            [nums[white], nums[blue]] = [nums[blue], nums[white]];
            blue--;
        }
    }
};