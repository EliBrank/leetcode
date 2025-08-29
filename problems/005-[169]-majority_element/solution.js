/**
 * @param {number[]} nums
 * @return {number}
 */
export const majorityElement = function(nums) {
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
