/**
 * @param {number[]} prices
 * @return {number}
 */
export const maxProfit = function(prices) {
  let minPrice = prices[0];
  let maxReturn = 0;

  for (const price of prices) {
    if (price < minPrice) {
      minPrice = price;
    }
    if (price - minPrice > maxReturn) {
      maxReturn = (price - minPrice)
    }
  }

  return maxReturn;
};

const testPrices = [7,12,14,18,4,20,2,19,22,1];
console.log(maxProfit(testPrices));
