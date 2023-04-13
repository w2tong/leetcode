var RandomizedSet = function () {
    this.map = new Map();
    this.vals = [];
    this.size = 0;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (this.map.has(val)) return false;
    this.map.set(val, this.size++);
    this.vals.push(val);
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (!this.map.has(val)) return false;
    const temp = this.vals[(this.size--) - 1];
    const i = this.map.get(val);
    this.map.set(temp, i);
    this.map.delete(val);
    this.vals[i] = temp;
    this.vals.pop();
    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    return this.vals[Math.floor(Math.random() * this.size)];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */