/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
    const res = [];
    const dp = new Array(s.length).fill(true);
    function dfs(index, arr) {
        if (index === s.length) {
            res.push(arr.slice().join(' '));
            return;
        }
        if (dp[index] === false) return;
        let isWord = false;
        for (const word of wordDict) {
            if (index + word.length > s.length) continue;
            if (s.substring(index, index + word.length) === word) {
                isWord = true;
                arr.push(word);
                dfs(index + word.length, arr);
                arr.pop();
            }
        }
        dp[index] = isWord;
    }
    dfs(0, []);
    return res;
};