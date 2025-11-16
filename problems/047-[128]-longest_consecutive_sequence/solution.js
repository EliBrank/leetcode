/**
 * @param {number[]} nums
 * @return {number}
 */
export const longestConsecutive = function(nums) {
  let maxLength = (nums.length > 0) ? 1 : 0;

  // First, build the base set of numbers for fast lookup
  const numSet = new Set(nums);

  for (const num of numSet) {
    // A value before num, sequentially, means num is not the start of a sequence
    let isStartOfSeq = (numSet.has(num - 1)) ? false : true;

    if (!isStartOfSeq) continue;

    // Iterate through each number that would follow 'num'
    let nextNumInSeq = num + 1;
    let currentLength = 1;
    // If it's in the numSet, it's part of a valid consecutive sequence
    while (numSet.has(nextNumInSeq)) {
      nextNumInSeq++;
      currentLength++
    }
    maxLength = Math.max(maxLength, currentLength);
  }

  return maxLength;
};

console.log('CASE 1:');
const testNums1 = [100,4,200,1,3,2];
console.log(longestConsecutive(testNums1));
// Output: 4

console.log('CASE 2:');
const testNums2 = [0,3,7,2,5,8,4,6,0,1];
console.log(longestConsecutive(testNums2));
// Output: 9

console.log('CASE 3:');
const testNums3 = [1,0,1,2];
console.log(longestConsecutive(testNums3));
// Output: 3
