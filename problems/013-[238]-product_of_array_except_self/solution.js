/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const productExceptSelf = function(nums) {
  let prefixNums = [];
  let suffixNums = [];

  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    prefixNums.push(prefix);
    prefix *= nums[i];
  }

  let suffix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    suffixNums.unshift(suffix);
    suffix *= nums[i];
  }

  return nums.map((_, i) => prefixNums[i] * suffixNums[i]);
};

console.log('CASE 1:');
const testNums1 = [1,2,3,4];
console.log(productExceptSelf(testNums1));

console.log('CASE 2:');
const testNums2 = [-1,1,0,-3,3];
console.log(productExceptSelf(testNums2));
