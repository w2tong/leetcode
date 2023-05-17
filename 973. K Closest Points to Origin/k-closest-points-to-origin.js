/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
    const maxQueue = new MaxPriorityQueue({ priority: ([x, y]) => x ** 2 + y ** 2 });
    for (const point of points) {
        maxQueue.enqueue(point);
        if (maxQueue.size() > k) maxQueue.dequeue()
    }
    const res = [];
    for (let i = 0; i < k; i++) {
        res.push(maxQueue.dequeue().element);
    }
    return res;
};