/**
 * @param {number[]} prices
 * @return {number}
 */
export const maxProfit = function(prices) {
  let localMin = prices[0];
  let localProfit = 0;
  let maxReturn = 0;

  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];
    const prevPrice = prices[i - 1];

    if (i === (prices.length - 1) && price >= prevPrice) {
      maxReturn += price - localMin;
    }

    if (price < prevPrice || prevPrice === undefined) {
      localMin = price;
      maxReturn += localProfit;
      localProfit = 0;
      continue;
    }

    localProfit = price - localMin;
  }

  return maxReturn;
};

[
  8,5,8,12,56,45,33,34,60,58
]
