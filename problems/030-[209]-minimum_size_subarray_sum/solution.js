/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
export const minSubArrayLen = function(target, nums) {
  let minLength = nums.length;
  let currentSum = 0;
  let l = 0;
  let hasSolution = false;

  for (let r = 0; r < nums.length; r++) {
    currentSum += nums[r];
    while (currentSum >= target && l <= r) {
      hasSolution = true;
      minLength = Math.min(minLength, ((r - l) + 1));
      currentSum -= nums[l];
      l++;
    }
  }

  if (!hasSolution) {
    minLength = 0;
  }

  return minLength;
};

console.log('CASE 1:');
const testTarget1 = 7;
const testNums1 = [2,3,1,2,4,3];
console.log(minSubArrayLen(testTarget1, testNums1));

console.log('CASE 2:');
const testTarget2 = 4;
const testNums2 = [1,4,4];
console.log(minSubArrayLen(testTarget2, testNums2));

console.log('CASE 3:');
const testTarget3 = 11;
const testNums3 = [1,1,1,1,1,1,1,1];
console.log(minSubArrayLen(testTarget3, testNums3));

console.log('CASE 4:');
const testTarget4 = 15;
const testNums4 = [1,2,3,4,5];
console.log(minSubArrayLen(testTarget4, testNums4));
