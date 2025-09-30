/**
 * @param {number[]} nums
 * @return {number[][]}
 */
export const threeSum = function(nums) {
  const twoSumMap = {};
  const res = [];
  const seen = new Set();

  /**
   * Example format of twoSumMap:
   *
   * {
   *   '-1': [ [0, 1], [1, 4] ],
   *   '0': [ [0, 2], [2, 4] ]
   * }
   *
   * Keys are sum of two numbers
   * Values are array indices whose values add to that sum
   *
   * Given input array (arr) -> [-1,0,1,2,-1,-4]:
   * -1 is the sum of both (arr[0] + arr[1]) and (arr[1] + arr[4])
   */
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const tempSum = nums[i] + nums[j];
      const tempArr = [i, j];
      if (!twoSumMap[tempSum]) {
        // Initialize new array to hold index arrays
        twoSumMap[tempSum] = new Array;
      }

      twoSumMap[tempSum].push(tempArr);
    }
  }

  for (let i = 0; i < nums.length; i++) {
    const target = twoSumMap[0 - nums[i]];
    if (!target) continue;

    // Loop through each index array for relevant key in twoSumMap
    for (const arr of target) {
      if (!(arr.includes(i))) {
        if (i > arr[1]) {
          const validTriplet = [nums[arr[0]], nums[arr[1]], nums[i]].sort((a, b) => a - b);
          // Stringify validTriplet as 'key' to add to the seen set
          // This allows for O(1) lookup/validation
          const key = validTriplet.join(',');
          if (!seen.has(key)) {
            seen.add(key);
            res.push(validTriplet);
          }
        }
      }
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
