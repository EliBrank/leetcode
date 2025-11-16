/**
 * @param {number[]} nums
 * @return {number}
 */
export const longestConsecutive = function(nums) {
  const baseNumSet = new Set();
  const alreadyEvaluated = new Set();
  let maxLength = 0;

  // First, build the base set of numbers for fast lookup
  for (const num of nums) {
    baseNumSet.add(num);
  }

  for (const num of nums) {
    // Skip to next num if already evaluated
    if (alreadyEvaluated.has(num)) continue;

    // Iterate through each number that would follow 'num'
    let nextNumInSeq = num;
    // If it's in the baseNumSet, it's part of a valid consecutive sequence
    while (baseNumSet.has(nextNumInSeq)) {
      // Also keep track of numbers that are already evaluated
      //
      // e.g. On subsequent loops, for a sequence of 1,2,3 from [1,2,3,100,200]
      // 2 and 3 would not need to be evaluated again as num in this for loop
      alreadyEvaluated.add(nextNumInSeq);
      nextNumInSeq++;
    }

    const currentSeqLength = nextNumInSeq - num;
    maxLength = Math.max(maxLength, currentSeqLength);
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
