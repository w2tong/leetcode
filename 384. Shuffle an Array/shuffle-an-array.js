/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
    this.nums = nums;
    this.random = [...nums];
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
    return this.nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
    for (let i = this.random.length - 1; i >= 0; i--) {
        const r = Math.floor(Math.random() * i + 1);
        [this.random[i], this.random[r]] = [this.random[r], this.random[i]];
    }
    return this.random;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */