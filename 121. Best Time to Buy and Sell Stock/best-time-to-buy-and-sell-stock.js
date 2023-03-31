/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let buy = 0;
    let sell = 1;
    let max = 0;
    while (sell < prices.length) {
        if (prices[sell] < prices[buy]) {
            buy = sell;
        }
        else {
            max = Math.max(max, prices[sell] - prices[buy]);
        }
        sell++;
    }
    return max;
};