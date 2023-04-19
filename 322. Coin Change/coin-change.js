/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

// Solution 1 bottom-top
var coinChange = function (coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    for (let a = 1; a <= amount; a++) {
        for (let i = 0; i < coins.length; i++) {
            if (coins[i] <= a) {
                dp[a] = Math.min(dp[a], dp[a - coins[i]] + 1);
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
};

// Solution 2 top-bottom (much slower)
var coinChange2 = function (coins, amount) {
    const memo = new Array(amount);

    var getMinCoins = function (amount) {
        if (amount === 0) return 0;
        if (memo[amount]) return memo[amount];
        let res = [];
        for (let i = coins.length; i >= 0; i--) {
            if (coins[i] <= amount) {
                res.push(getMinCoins(amount - coins[i]) + 1);
            }
        }
        memo[amount] = Math.min(...res)
        return memo[amount];
    }

    const min = getMinCoins(amount);
    if (min === Infinity) return -1;
    return min;
};
