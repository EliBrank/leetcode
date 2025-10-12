/**
 * @param {number[]} nums
 * @return {number[][]}
 */
export const threeSum = function(nums) {
  nums = nums.sort((a, b) => a - b);
  const solutionSet = new Set();

  let res = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const total = nums[i] + nums[left] + nums[right];
      if (total === 0) {
        res.push([nums[i], nums[left], nums[right]]);

        while (nums[left] === nums[left + 1] && left < right) left++;
        while (nums[right] === nums[right - 1] && left < right) right--;
      }

      if (total > 0) right--;
      else left++;
    }
  }

  return res;
}

console.log('CASE 1:');
const testNums1 = [-1,0,1,2,-1,-4];
console.log(threeSum(testNums1));

console.log('CASE 2:');
const testNums2 = [0,1,1];
console.log(threeSum(testNums2));

console.log('CASE 3:');
const testNums3 = [0,0,0];
console.log(threeSum(testNums3));

console.log('CASE 4:');
const testNums4 = [1,-1,-1,0];
console.log(threeSum(testNums4));

console.log('CASE 5:');
const testNums5 = [-2,0,1,1,2];
console.log(threeSum(testNums5));
