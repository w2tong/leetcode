var TimeMap = function () {
    this.map = new Map();
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
    if (this.map.has(key)) this.map.get(key).push([timestamp, value]);
    else this.map.set(key, [[timestamp, value]]);
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
    if (!this.map.has(key)) return '';
    const arr = this.map.get(key);
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        const mid = left + Math.ceil((right - left) / 2);
        if (timestamp < arr[mid][0]) right = mid - 1;
        else left = mid;
    }
    return (arr[right][0] <= timestamp) ? arr[right][1] : '';
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */