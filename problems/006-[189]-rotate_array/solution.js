/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
export const rotate = function(nums, k) {
  // for (let i = 0; i < k; i++) {
  //   const numToSwap = nums.pop();
  //   nums.unshift(numToSwap);
  // }

  // Modulo operator makes sure numsToShift stays in range
  k = k % nums.length
  const numsToShift = nums.splice(nums.length - k);
  nums.unshift(...numsToShift);
};

const testNums1 = [1,2,3,4,5,6,7];
const k1 = 3;
rotate(testNums1, k1);
console.log('TEST CASE 1:')
console.log('nums:', testNums1);

const testNums2 = [-1,-100,3,99];
const k2 = 2;
rotate(testNums2, k2);
console.log('TEST CASE 2:')
console.log('nums:', testNums2);
