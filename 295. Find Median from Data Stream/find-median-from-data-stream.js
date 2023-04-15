var MedianFinder = function () {
    this.small = new MaxPriorityQueue();
    this.large = new MinPriorityQueue();
    this.even = true;
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
    if (this.even) {
        this.small.enqueue(num);
        this.large.enqueue(this.small.dequeue().element)
    }
    else {
        this.large.enqueue(num);
        this.small.enqueue(this.large.dequeue().element);
    }
    this.even = !this.even;
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
    if (!this.even) {
        return this.large.front().element;
    }
    return (this.small.front().element + this.large.front().element) / 2;
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */