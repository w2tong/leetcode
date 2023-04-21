/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

// Solution 1 Recursive
var wordBreak = function (s, wordDict) {
    const dp = new Array(s.length).fill(-1);
    function dfs(index) {
        if (index === s.length) return true;
        if (dp[index] !== -1) return dp[index];
        let isWord = false;
        for (const word of wordDict) {
            if (s.substring(index, index + word.length) === word && dfs(index + word.length)) {
                isWord = true;
            }
        }
        dp[index] = isWord;
        return dp[index];
    }
    return dfs(0);
};

// Solution 2 iterative
var wordBreak = function (s, wordDict) {
    const set = new Set(wordDict);
    const dp = new Array(s.length + 1).fill(false);
    dp[0] = true;
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && set.has(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[s.length];
};