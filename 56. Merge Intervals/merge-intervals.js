/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let currStart = intervals[0][0];
    let currEnd = intervals[0][1];
    let res = []
    for (let i = 1; i < intervals.length; i++) {
        const [start, end] = intervals[i];
        if (start <= currEnd) {
            currEnd = Math.max(currEnd, end);
        }
        else {
            res.push([currStart, currEnd]);
            currStart = start;
            currEnd = end;
        }
    }
    res.push([currStart, currEnd]);
    return res;
};