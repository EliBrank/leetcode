/**
 * @param {number} n
 * @return {boolean}
 */
export const isHappy = function(n) {
  const encounteredNums = new Set();

  while (n !== 1) {
    if (encounteredNums.has(n)) return false;
    encounteredNums.add(n);
    n = sumOfSquaredDigits(n);
  }

  return true;
};

const sumOfSquaredDigits = function(n) {
  let total = 0;
  while (n !== 0) {
    // Increment total by digit, squared
    total += (n % 10) ** 2
    n = Math.floor(n / 10);
  }
  return total;
}

console.log('CASE 1:');
const testNum1 = 19;
console.log(isHappy(testNum1));
// Output: true

console.log('CASE 2:');
const testNum2 = 2;
console.log(isHappy(testNum2));
// Output: false
