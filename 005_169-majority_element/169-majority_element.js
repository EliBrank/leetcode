/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
  let numCounts = {}
  let mode = nums[0];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (!numCounts[num]) {
      numCounts[num] = 1;
    } else {
      numCounts[num]++;
      if (numCounts[num] > nums.length / 2) {
        mode = num;
        break;
      }
    }
  }

  return mode;
};

const testNums = [3,2,3];
console.log('CASE 1:')
console.log('majority element:', majorityElement(testNums));

console.log();

const testNums2 = [2,2,1,1,1,2,2];
console.log('CASE 2:')
console.log('majority element:', majorityElement(testNums2));
