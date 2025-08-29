/**
 * @param {number[]} nums
 * @return {number}
 */
export const removeDuplicates = function(nums) {
  const numsObj = {};
  const numsFiltered = [];
  let numsCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!numsObj[nums[i]]) {
      numsObj[nums[i]] = 1;
      numsCount++;
    } else if (numsObj[nums[i]] === 1) {
      numsObj[nums[i]] = 2;
      numsCount++;
    }
  }

  for (let i of new Set(nums)) {
    for (let j = 0; j < numsObj[i]; j++) {
      numsFiltered.push(i);
    }
  }

  for (let i = 0; i < numsCount; i++) {
    nums[i] = numsFiltered[i];
  }

  return numsCount;
};
