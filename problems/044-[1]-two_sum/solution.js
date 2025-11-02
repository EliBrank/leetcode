/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export const twoSum = function(nums, target) {
  const targetNumsMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const matchingNumber = target - nums[i];
    if (targetNumsMap.get(nums[i]) === undefined) {
      targetNumsMap.set(matchingNumber, i);
    } else {
      return [targetNumsMap.get(nums[i]), i];
    }
  }
};

console.log('CASE 1:');
const testNums1 = [2,7,11,15];
const target1 = 9;
console.log(twoSum(testNums1, target1));
// Output: [0,1]

console.log('CASE 2:');
const testNums2 = [3,2,4];
const target2 = 6;
console.log(twoSum(testNums2, target2));
// Output: [1,2]

console.log('CASE 3:');
const testNums3 = [3,3];
const target3 = 6;
console.log(twoSum(testNums3, target3));
// Output: [0,1]
