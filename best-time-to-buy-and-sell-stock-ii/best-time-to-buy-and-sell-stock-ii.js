/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
    let profit = 0
    for (let i = 0; i < prices.length - 1; i++) {
        let diff = prices[i+1] - prices[i]
        diff > 0 ? profit += diff : profit
    }
    return profit
};