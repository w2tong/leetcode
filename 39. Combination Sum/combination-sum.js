/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const res = [];
    backtrack(candidates, 0, target, [], res);
    return res;
};

function backtrack(candidates, start, target, arr, res) {
    if (target === 0) {
        res.push(arr.slice());
        return;
    }
    for (let i = start; i < candidates.length; i++) {
        if (target - candidates[i] >= 0) {
            arr.push(candidates[i]);
            backtrack(candidates, i, target - candidates[i], arr, res);
            arr.pop();
        }
    }
}