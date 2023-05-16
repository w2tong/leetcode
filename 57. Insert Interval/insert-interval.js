/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

// Using indices and slice
var insert = function (intervals, newInterval) {
    if (intervals.length === 0) return [newInterval];
    let start = 0;
    while (start < intervals.length && newInterval[0] > intervals[start][1]) {
        start++;
    }
    let end = intervals.length - 1;
    while (end >= 0 && newInterval[1] < intervals[end][0]) {
        end--;
    }
    if (start < intervals.length) {
        newInterval[0] = Math.min(newInterval[0], intervals[start][0]);
    }
    if (end >= 0) {
        newInterval[1] = Math.max(newInterval[1], intervals[end][1]);
    }
    return [...intervals.slice(0, start), newInterval, ...intervals.slice(end + 1, intervals.length)]
};

// Using left and right arrays
var insert2 = function (intervals, newInterval) {
    let [start, end] = newInterval
    const left = [], right = [];

    for (const interval of intervals) {
        if (start > interval[1]) {
            left.push(interval);
        }
        else if (end < interval[0]) {
            right.push(interval);
        }
        else {
            start = Math.min(start, interval[0])
            end = Math.max(end, interval[1])
        }
    }
    return [...left, [start, end], ...right]
};